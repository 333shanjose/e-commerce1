import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Admin() {
   const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/admin')
    .then((res)=>{
       console.log(res) 
       setProducts(res.data.products)
    })
  },[])
     
    
    function Delete(id){
      axios.get('/admin/delete-products/'+id)
      .then((res)=>{
        console.log(res)
        if (res.data.response.acknowledged===true){
           window.location='/admin'
        }else{
          console.log(res)
        }
      })
    }
  return (
    <div>
        <div class="container">
    <div class="row mt-5 ">
     
    <a href="/admin/addproducts"style={{width:'500px'}} className="btn btn-success ml-auto">add products</a>
    </div>
    <table class="table mt-5" id="producttable">
    
  <thead>
     
    <tr>
      <th scope="col"></th>
      <th scope="col">name</th>
      <th scope="col">category</th>
      <th scope="col">discription</th>
       <th scope="col">iteam</th>
       <th scope="col">option</th>
       <th scope="col">option</th>
        
    </tr>
  </thead>
  <tbody>
      {products.map((product)=>{
         return (
          
    <tr>
        
      <th scope="row">1</th>
       
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.discription}</td>
      <td><img style={{width:'50px',height:'50px'}} src={'/productimages/'+product._id+'.jpg'} alt=""></img></td>
     
         <td><Link class="btn btn-primary"  to='/admin/editproducts'  state={product._id}>edit</Link></td>
   
      
        <td><a  class="btn btn-danger" onClick={()=>Delete(product._id)}>delete</a></td>
    </tr>
       )

      })}
  </tbody>
</table>
     
    
     
</div>

    </div>
  
  )
}

export default Admin