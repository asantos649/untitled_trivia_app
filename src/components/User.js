import React from 'react';

function User(props) {
   
    return (
     <div className='score-card'>
         <div>{props.user.emoji} </div>
         <div>{props.user.name}</div>
         
     </div>
    );
  }
  
  export default User;