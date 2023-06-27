import {React,useEffect} from 'react'
import axios from 'axios'

function Login() {
  
  useEffect(()=>{
    axios.get('/loginn').then((res)=>{
     console.log(res)
    if(res.status===200){
      window.location='/'
    }else{
      window.location='/login'
    } 
    })

  },[])
  return (
    <div>
        <h2 class="login-title">Login</h2>
                
                   
                 
                <form action="/loginn" method="post">
                      
                    <div class="form-group"> 
                    <label>Email</label> 
                    <input type="Email" name="Email"   placeholder="Email"/> 
                    </div>
                    <div class="form-group mb-3"> 
                    <label>Password</label> 
                    <input type="Password" name="Password"  placeholder="Password"/> 
                    </div>
                    <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Login</button>
                  </div>
                </form>
                <p class="login-wrapper-footer-text">create an account? <a href="/signup" class="text-reset">Signup here</a></p>
    </div>
        
    
  )
}

export default Login