const dotenv = require('dotenv');
const express =require('express');
const bcryptjs= require('bcryptjs');
const jwt=require('jsonwebtoken');
const cookieParser= require('cookie-parser');
const cors= require('cors');

const app= express();
app.use(cors())
// configure Env file and require connection file
dotenv.config({path: './config.env'});
require('./db/conn');
const port= process.env.PORT;

// Require Model
 const Users = require('./models/userSchema');
 const authenticate= require('./middleware/authenticate') 

 app.use(express.json());
 app.use(express.urlencoded({extended : false}));
 app.use(cookieParser());
 
app.get('/',(req,res)=>{
    res.send("hello from server");
})

//  registration

// app.post('/register', async (req,res)=>{
//     try{
//         //  get body or data
//         const username=req.body.username;
//         const email= req.body.email;
//         const password = req.body.password;

//         const createUser= new Users({
//             username: username,
//             email : email,
//             password: password
//         });
//         // save method is used to create user
//         const created = await createUser.save()
//         console.log(created);
//         res.status(200).send("Registered")

//     }catch(error){
//             res.status(400).send(error)
//     }
// })

app.post('/register', async (req,res)=>{
    const { username, email, password, UserType}=req.body;
    if(!username || !email || !password)
    {
        return res.status(422).json({error: "plz filled the field properly"});
        
    }

    try{
        const userExist=await Users.findOne({email:email});
        if(userExist){
            return res.status(422).json({error: "Email already exist"});
        }
        const user= new Users({username, email, password, UserType });
        await user.save();
        res.status(201).json({message: "user registered successfully."});
    } catch(err)
    {
        console.log(err);   
    }
    
});


// login user
app.post('/login', async (req, res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        // find user if exist
        const user=await Users.findOne({email : email});
        if(user){
            const isMatch = await bcryptjs.compare(password, user.password);
            if(isMatch){
                const token = await user.generateToken();
                console.log(token);
                res.cookie("jwt", token, {
                    // expires token in 24 hours
                    expires : new Date(Date.now() +86400000),
                    httpOnly: true
                })
                res.status(200).send("loggedin")
            }else{
                res.status(400).send("invalid credentials")
            }
        }else{
            res.status(400).send("invalid credentials");
        }

    } catch(error){
        res.status(400).send(error);
    }
})


// logout page
app.get('/logout',(req,res)=>{
    res.clearCookie("jwt",{path:'/'});
    res.status(200).send("user logged out");
})

// authentication
app.get('/auth', authenticate, (req,res)=>
{
        console.log("mY user is this: ",req.myuser);
        // res.send("successfully sending");
        const usertype= req.myuser.UserType;
        
        res.status(200).json({
            usertype
        })
})


app.get('/getuser',async (req,res)=>{
    try{
        const alluser= await Users.find({});
        res.send({ status: 'ok', data:alluser});
    } catch(err){
        console.log(err)
    }
})


// run server
app.listen(port,()=>{
    console.log("server is listening")
})