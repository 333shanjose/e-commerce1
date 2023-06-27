import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router'

function Editproducts(props) {
   const location=useLocation()
   const propsdata=location.state
    console.log(propsdata)
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/admin')
    .then((res)=>{
       console.log(res) 
       setProducts(res.data.products)
    })
  },[])
  function viewImage(event){
    document.getElementById("imageView").src=URL.createObjectURL(event.target.files[0])
 }
  
  return (
    <div>
        
        <div class="container">
        <div class="row">
 <form action={'/admin/edit-products/'+propsdata} method="post" enctype="multipart/form-data">

    <p>name</p>
    <label>name</label>
    <input type="text" name="name" class="form-control" value={products.name}/>
    
  
  
    <label>category</label>
    <input type="text" name="category" class="form-control" value={products.category}/>
    
  
  
    <label>discription</label>
    <input type="text" name="discription" class="form-control" value={products.discription}/>
     
     <label>images</label>
     <img src={'/productimages/'+products._id+'.jpg'} alt="" style={{width:'100px',height:'auto'}} id='imageView'/>
    
     <input type="file" name="images" class="form-control" onchange={()=>viewImage()}/>
     
    
     
    
  
  
    
      
       
  
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
    </div>
  )
}

export default Editproducts