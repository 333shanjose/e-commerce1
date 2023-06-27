import {React,useState} from 'react'

function Products() {
   
  return (
    
<div className="container">
    <div className="row">
       <form action="/admin/addproduct" method="post" enctype="multipart/form-data">
  
           <label>name</label>
           <input type="text" name="name" class="form-control"/>
    
  
  
            <label>category</label>
            <input type="text" name="category" class="form-control"/>
    
  
  
            <label>discription</label>
            <input type="text" name="discription" class="form-control"/>
     
            <label>Price</label>
     
             <input type="number" name="Price" class="form-control"/>

  
     
             <label>Images</label>
             <input  type="file" name="images" class="form-control"/>
    
                  
               
      
       
  
 
            <button type="submit" className="btn btn-primary">Submit</button>
     </form>
  </div>
</div>
    
  )
}

export default Products