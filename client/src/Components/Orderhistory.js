import React, { useEffect,useState } from 'react'
import axios from "axios"
function Orderhistory() {
  const[orders,setOrders]=useState([])
  useEffect(()=>{
  axios.get('/admin/orderhistoryy')
  .then((res)=>{
    console.log(res.data)
    setOrders(res.data.orderdetails)
  })
},[])
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Email</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      
      
      <th scope="col">Address</th>
      <th scope="col">username</th>
      <th scope="col">paymentmethod</th>
      <th scope="col">Country</th>
      
      <th scope="col">state</th>
    </tr>
  </thead>
  <tbody>
     
     {orders.map((order)=>{
     
        return (
     
      <tr>
      <td>{order.Date}</td>
      <td>{order.Email}</td>
      <td>{order.firstname}</td>
      <td>{order.lastname}</td>
      <td>{order.adddress}</td>
      <td>{order.username}</td>
      <td>{order.paymentmethod}</td>
      <td>{order.country}</td>
      <td>{order.state}</td>
      <td>
          <a href='/admin/orderproducts' class="btn btn-success">view products</a>
      </td>
     
    </tr>
        )})}
  </tbody>
</table>
    </div>
  )
}

export default Orderhistory