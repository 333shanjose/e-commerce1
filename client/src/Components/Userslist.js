import React, { useEffect,useState } from 'react'
import axios from 'axios'
function Userslist() {
 const[users,setUsers]=useState([])
   useEffect(()=>{
    axios.get('/admin/userslists')
    .then((res)=>{
        console.log(res)
     setUsers(res.data.users)
    })
},[])
  return (
    <div>
        <div class="container ml-3">
  <table class="table table-bordered ">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Paymentmethod</th>
      <th scope="col">Join On</th>
      
    </tr>
  </thead>
  
    
 


 

 <tbody>
    
     {users.map((user)=>{
          return (
      <tr>
       
      
      <td>{user.firstname}</td>
      <td>{user.Email}</td>
      <td>{user.username}</td>
      <td>{user.paymentmethod}</td>
      <td>{user.Date}</td>
        
    </tr>
          )
          })}
  </tbody>
</table>
</div>
    </div>
  )
}

export default Userslist