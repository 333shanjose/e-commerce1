import React from 'react'

function Signup() {
  return (
	<div>
		<form action="/signup" method="post">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr/>
        <div class="form-group">
			     <label>name</label>
				<input type="text" class="form-control" name="name" placeholder=" Name" required="required"/>

			       	
        </div>
        <div class="form-group">
			<label>email</label>
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div class="form-group">
			<label>Password</label>
            <input type="password" class="form-control" name="Password" placeholder="Password" required="required"/>
        </div>
		        
       
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
	</div>
  )
}

export default Signup