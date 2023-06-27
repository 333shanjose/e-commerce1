import React, { useEffect,useState } from 'react'
import axios from 'axios'
function Orderproducts(){
 const[products,setProducts]=useState([])
    useEffect(()=>{
      
     axios.get('/admin/orderproductss')
     .then((res)=>{
         console.log(res)
         setProducts(res.data.products)
     })
    },[])
  return (
    <div>
         <div class="container mt-5">
        <div class="row">
           {products.map((product)=>{
               return (
          <div class="col-md-3 card-body ">
        

        <div class="card" style={{width: '15rem',height:'25rem', border:'1'}}>
  <img src={'/productimages/'+product.product._id+'.jpg'} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.product.name}</h5>
    <p class="card-title">Rs{product.product.Price}</p>
    <p class="card-text">{product.quantity}</p>
     <p class="card-text">{product.product.discription}</p>
    
   </div>
  
</div>

</div>

      )})}

</div>
</div>

    </div>
  )
}

export default Orderproducts