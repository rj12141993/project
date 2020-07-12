import React from 'react';

function Registration(props){
    return(
<div>
form(action="/register" method="POST")
  <input type="text" name="name" placeholder="Full name"></input>
   <input type="email" name="email" placeholder="Email address"></input>
  <input type="password" name="password" placeholder="Password"></input>
 < button type="submit">Create account</ button>
 </div>
    );
}
export default Registration;