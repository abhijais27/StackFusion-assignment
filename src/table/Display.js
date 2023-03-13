import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {Link} from "react-router-dom";
import {
    Table,
    Thead,
    Tbody,
   
    Tr,
    Th,
    Td,
   
    TableContainer,
  } from '@chakra-ui/react'
const Display = (props) => {
//   document.title="Form Details";
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await axios.get("http://localhost:8800/api/posts");
    console.log(res.data);
    setPosts(res.data);
  };
 useEffect(() => {
   
  getPosts();
}, [])
  return (
    <div>
        <h1>Form Details</h1>
        <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th isNumeric>Date of birth</th>
        <th>Email</th>
        <th isNumeric>Phone number</th>
      </tr>
    </Thead>
    <Tbody>
        {posts.map((post,i) => (
           
            <tr>
                <td>{i+1}</td>
                <td>{post.name}</td>
                <td>{post.date}</td>
                <td>{post.email}</td>
                <td>{post.phone}</td>

            </tr>
        ))
        }
     
    </Tbody>
    
  </Table>
</TableContainer>
      </div>
  )
}

export default Display