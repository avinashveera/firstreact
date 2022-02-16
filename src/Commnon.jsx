import React from "react";
import Veera from '../src/img/veera.jpg'
import  {  NavLink } from 'react-router-dom'

const Common=(props)=>{


    return(<>

   <section className="d-flex align-items-center">
       <div className="container-fluid">
           <div className="row">
               <div className="col-10 max-auto">

                   <div className='row d-flex align-items-center'>

                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"> 
                   
                   <h1>welcome to {props.page} page <strong>Avinash veera</strong></h1>
                   <div className="my-3">
                   <h2>we are the team of talanted devloper making website</h2>
                   </div>
                   <div className="mt-3" >
                       <NavLink to="#" className="btn-get-started">{props.btn}</NavLink>

                   </div>
                   </div>

                   <div className="col-lg-6 order-1  order-lg-2 header-img">

                       <img src={Veera} className='img-fluid animated' alt="photo"/>

                   </div>

                   </div>

               </div>
           </div>
       </div>
   </section>
    
    
    </>)

}

export default Common;