import React from "react";
import Card from './Card';
import veera from '../src/img/veera.jpg'

const Service=()=>{


    return(<>

<div className="my-5">

<h1 className="tab-content">Our service</h1>

<div className="container-fluid mb-5">
  <div className="row">
  <div className="col-10 max-auto">
  <div className="row">


    <Card 
    img={veera}
    title='web design'    
    />

<Card 
    img={veera}
    title='web devlopment'    
    />


<Card 
    img={veera}
    title='hacking'    
    />


<Card 
    img={veera}
    title='marketing'    
    />


<Card 
    img={veera}
    title='android dev'    
    />

<Card 
    img={veera}
    title='ios devlopment'    
    />


    </div>
</div>

     </div>

     </div>
     </div>


  
    </>)

}

export default Service;