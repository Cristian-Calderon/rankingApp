import React from 'react'
import data from '../../empresas.json';
const UsersDetails = () =>{
return(
  <div>
     {data.map((id) => (
       <div>
        <div><img src={id.Column3} alt="" /></div>
         <div>{id.Column1}</div> 
         <div>{id.Column2}</div>
         <div>{id.Column4}</div>
       </div>
     ))}
        
        
     
     
    
  </div>
)
}

export default UsersDetails;
