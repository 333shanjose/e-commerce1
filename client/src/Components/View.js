import {React,useEffect,useState} from 'react'
import axios from "axios"

 
function View() {
    const[products,setProducts]=useState([])
    function addcart(id){
      axios.get('/add-cart/'+id)
      .then((res)=>{
        console.log(res)
      })
    }
     useEffect(()=>{
      axios.get('http://localhost:4000')
      
      .then((res) => {
          
          let items=res.data
           setProducts(items)
          console.log(res)
          
          
          
       })
       
       
      },[])
      
     
      
    
    
      
  


  
    
  
      
      
  
   
     
      
      
   
   
   
  
   

   
  return (
    
  
    
    
    <div className="container mt-5">
        <div className="row">
          {

          products.map((product)=>{
            return ( 
          <div className="col-md-3 ">
        

        <div className="card,mt-5px"style={{width: "15rem",height:"25rem"}}>
        <img src={'/productimages/'+product._id+'.jpg'} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p>Rs{product.Price}</p>
    <p className="card-text">{product.discription}</p>
    
    <button  className="btn btn-primary" onClick={()=>addcart(product._id)}>Add to cart</button>
  </div>
  
</div>
</div>


            )

          })}
</div>
</div>
   
     
   





      
      
   
   
   
   
   
   
       
    

   
      
   
     
  )
  
}

export default View