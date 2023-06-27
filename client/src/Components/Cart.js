import React, { useEffect,useState } from 'react'
import axios from 'axios'
function Cart() {
   const[products,setProducts]=useState([])
   
   const[user,setUser]=useState('')
   
   useEffect(()=>{
    axios.get('/cartt').then((res)=>{
       console.log(res)
      setProducts(res.data.products)
      
      setUser(res.data.user)
      
  })
  },[])
  function changeQuantity(cartId,productId,userId,count){
    let quantity=parseInt(document.getElementById(productId).innerHTML)

  
    
      
     axios.post('/change-product',
        
        {
          user:userId,
          cart:cartId,
          proId:productId,
          count:count,
          quantity:quantity
          
        })
        
        .then((response)=>{
          console.log(response.data.total)
          if(response.removeproduct){
          alert("product removed")
          window.reload()
        }else {
        
          document.getElementById(productId).innerHTML=count+quantity
          document.getElementById("total").innerHTML=response.data.total
            
          
        }
        })
      }

    function remove(cartId,productId){
    
     
  
    
      
     axios.post('/remove-product',
        
        {
          
          cart:cartId,
          proId:productId,
          
          
        })
        
        .then((response)=>{
         
          alert("product removed")
          window.location.reload()
        
        })
      }
  
  
    
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      
      <th scope="col">iteam</th>
      <th scope="col">title</th>
       <th scope="col">Price</th>
      <th scope="col">quantity</th>
      
    </tr>
  </thead>
  <tbody> 
     {products.map((product)=>{
        return (
     <tr>
      
      <td><img style={{width:'70px',height:'70px'}} src={'/productimages/'+product.product._id+'.jpg'} alt=""/></td>
      <td>{product.product.name}</td>
      <td>{product.product.Price}</td>
      
      <td><button class="cart-item-count mr-3" onClick={()=>changeQuantity(product._id,product.product._id,user,-1)}>-</button>
      <span id={product.product._id}>{product.quantity}</span>
      <button className="cart-item-count ml-3"  onClick={()=>changeQuantity(product._id,product.product._id,user,1)}>+</button></td>
      <td><button className="btn btn-danger" onClick={()=>remove(product._id,product.product._id)}>remove</button></td>
    </tr>
   
    
    
        )})}
    
    
  </tbody>
</table>
<hr/>
<div className="float-right pr-5">
<h3 className="float-left mr-5">TOTAL:Rs.<span id="total"></span></h3>
<a href="/checkout" className="btn btn-success  mt-3" style={{width:'500x'}}><b>CHECK OUT</b></a>
</div>
</div>
  )
}

export default Cart