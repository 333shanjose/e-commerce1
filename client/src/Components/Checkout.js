import React from 'react'

function Checkout() {
  return (
    <div>
      <div class="container">
  <div class="py-5 text-center">
    
    <h2>Checkout form</h2>

  </div>

 
    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Billing address</h4>
      <form action="/place-order" method='post' className="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" name="firstName" placeholder=""  required/>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control" name="lastName" placeholder=""  required/>
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="username">Username</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">@</span>
            </div>
            <input type="text" class="form-control" name="username" placeholder="Username" required/>
            <div class="invalid-feedback" style={{width: '100%'}}>
              Your username is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(Optional)</span></label>
          <input type="email" class="form-control" name="email" placeholder="you@example.com"/>
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div class="mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" name="address" placeholder="1234 Main St" required/>
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        

        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="country">Country</label>
            <select class="custom-select d-block w-100" name="country" required>
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div class="ml-3">
            <p>paymentmethod</p>
            </div>
          <div class="ml-3">
           <label class="radio-inline">
           <input type="radio" name="paymentmethod" value="COD"/>COD 
           </label>
           </div>
           
          <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select class="custom-select d-block w-100" name="state" required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          
        </div>
        

        

        
        
        <hr class="mb-4"/>
        <button  className="btn btn-primary btn-lg btn-block" type="submit">PLACE ORDER</button>
      </form>
     </div>
  </div>


  </div>


  
  )
}

export default Checkout