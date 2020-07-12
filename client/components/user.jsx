import React from 'react';


function User(props){
    return(
        <div>
            
            <div className="container project">
       < form action="/login" method="POST">
          <input type="email"  className="form-control" placeholder="Email address"></input>
         < input type="password"  className="form-control" placeholder="Password"></ input>
         < button type="submit" className="btn btn-primary"> login</ button>
         < a href="/register" className="new-account-link"> Create a new account</ a>
         </ form>
         </ div>
         </div>

         
         
    );
}
export default User;