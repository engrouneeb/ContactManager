import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../Context';
 class Contacts extends Component {
   constructor(){
     super();
     this.state={
      
     };
   }
   render(){
     return(
       <Consumer>
         {value=>{
           const {Contacts}=value;
          return (  
        <div>
        <h1 className="display-4 mb-2">
              <span className="text-danger">Contact</span> List
            </h1>
       {Contacts.map(contact=>(
          <Contact 
          key={contact.id}
          contact={contact}/>
        ))} 
      </div>
    )
         }}
       </Consumer>
     )
   }
}
export default Contacts;
