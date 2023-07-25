import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [alldata, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server using Axios
    axios
      .get('http://localhost:3001/getuser')
      .then((response) => {
        // Convert the response data to an array of objects
        console.log(response.data)
        setData(response.data);
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
//   console.log(data.data[0].username);
  console.log(alldata);
  const { data }=alldata;
//   console.log(data)
//   console.log(typeof(data[0].username))
  return (
    <div>
        {/* {data[1].username} */}
       <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>User Type</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((user) => (
          <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.UserType}</td>
          </tr>
        ))}
      </tbody>
    </table>


        

    </div>
  );
};

export default Test;
