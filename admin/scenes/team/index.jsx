import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import  axios  from 'axios';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

const Team = () => {
  const [alldata,setData]=useState([])
  useEffect(()=>{
    
    axios.get('http://localhost:3001/getuser')
     .then(users=>setData(users.data))
     .catch(err=>console.log(err))


  },[]);
  const { data }=alldata;
  // console.log(data);


  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const columns = [
  //   { field: "_id", headerName: "ID" },
  //   {
  //     field: "username",
  //     headerName: "Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
    
    
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     flex: 1,
  //   },
  //   {
  //     field: "UserType",
  //     headerName: "Access Level",
  //     flex: 1,
  //     renderCell: ({ row: { access } }) => {
  //       return (
  //         <Box
  //           width="60%"
  //           m="0 auto"
  //           p="5px"
  //           display="flex"
  //           justifyContent="center"
  //           backgroundColor={
  //             access === "admin"
  //               ? colors.greenAccent[600]
  //               : access === "manager"
  //               ? colors.greenAccent[700]
  //               : colors.greenAccent[700]
  //           }
  //           borderRadius="4px"
  //         >
  //           {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            
  //           {access === "user" && <LockOpenOutlinedIcon />}
  //           <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
  //             {access}
  //           </Typography>
  //         </Box>
  //       );
  //     },
  //   },
  // ];


  // const updatedDataArray = data.map((item, index) => ({
  //   ...item,
  //   id: index + 1, 
  // }));

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    // selected: [1, 3],
    // clickToEdit: true,
  };

  const column=[
    {
      dataField:"_id",
      text: "ID",
      sort: true,
    },
    {
      dataField:"username",
      text:"Username",
      sort: true,
    },
    {
          dataField:"email",
          text: "email",
          sort: true,
    },
    {
      dataField:"password",
      text: "Password",
      sort: true,
    },
    {
      dataField:"UserType",
      text: "Access",
      sort: true,
    },
  ];

  return (
    // <Box m="20px">
    //   <Header title="Our Users" subtitle="Managing the users" />
    //   <Box
    //     m="40px 0 0 0"
    //     height="75vh"
    //     sx={{
    //       "& .MuiDataGrid-root": {
    //         border: "none",
    //       },
    //       "& .MuiDataGrid-cell": {
    //         borderBottom: "none",
    //       },
    //       "& .name-column--cell": {
    //         color: colors.greenAccent[300],
    //       },
    //       "& .MuiDataGrid-columnHeaders": {
    //         backgroundColor: colors.blueAccent[700],
    //         borderBottom: "none",
    //       },
    //       "& .MuiDataGrid-virtualScroller": {
    //         backgroundColor: colors.primary[400],
    //       },
    //       "& .MuiDataGrid-footerContainer": {
    //         borderTop: "none",
    //         backgroundColor: colors.blueAccent[700],
    //       },
    //       "& .MuiCheckbox-root": {
    //         color: `${colors.greenAccent[200]} !important`,
    //       },
    //     }}
    //   >
        
    //     <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
    //   </Box>
    // </Box>



    <>
      {/* <BootstrapTable keyField="_id" data={data} columns={column}/> */}

      {data && data.length > 0 ? (
        <BootstrapTable keyField="_id" data={data} columns={column} striped
        hover
        condensed pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: "dbclick",
          blurToSave: true,
          nonEditableRows: () => [1, 2, 3],
        })}
        selectRow={selectRow}
        filter={filterFactory()}
        />
      ) : (
        <p>Loading data...</p>
      )}

      {/* <table border='1'>
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
    </table> */}
    </>

  );
};

export default Team;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Team = () => {
//   const [alldata, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the server using Axios
//     axios
//       .get('http://localhost:3001/getuser')
//       .then((response) => {
//         // Convert the response data to an array of objects
//         console.log(response.data)
//         setData(response.data);
        
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
// //   console.log(data.data[0].username);
//   console.log(alldata);
//   const { data }=alldata;
//   // console.log(data)
//   // console.log(typeof(data[0].username))
//   return (
//     <div>
       
//        <table border="1">
//       <thead>
//         <tr>
//           <th>Username</th>
//           <th>Email</th>
//           <th>Password</th>
//           <th>User Type</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data && data.map((user) => (
//           <tr key={user._id}>
//             <td>{user.username}</td>
//             <td>{user.email}</td>
//             <td>{user.password}</td>
//             <td>{user.UserType}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </div>
//   );
// };

// export default Team;
