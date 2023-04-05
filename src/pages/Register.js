import React from 'react'


export const Register = () => {
    return (
      
      <div className= "Container">
           <div className= "formContainer">
      <span className="logo">Chit Chat</span>
      <span className="title">Register</span>
          <form>
              <input type = "text" placeholder= "name" />
              <input type="email" placeholder= "email"/>
              <input type="password" placeholder="password"/>
              <input type="file" id="file" />
              <button>Sign Up</button>
  
          </form>
          <p>You do not have an account? Login</p>
          </div>
          </div>
          
    )
  }
  


export default Register