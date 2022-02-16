import React ,{useState}from "react";

const Contact=()=>{
    const [Data,setData]=useState({
        email:"",
        text:''
    });

    const formSubmit=(e)=>{

        e.preventDefault();

  

    alert(`${Data.text}`)
   setData({
       email:'',
       text:""
   })
   

    }


    const inputEvent=(event)=>{
        const {name,value}=event.target
   
        setData((pre)=>{

            return{
                ...pre,
                [name]:value
            
            
            }

        })


    }

    return(<>

   <div className="my-5">

       <h1 className="text-center">contact us</h1>
    
   </div>

   <div className="container container-div">

       <div className="row">
           <div className="col-md-6 col-10 mx-auto">
               <form onSubmit={formSubmit}>
               <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"  name='email' onChange={inputEvent} value={Data.email} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" onChange={inputEvent} value={Data.text} name="text" rows="3"></textarea>
</div>

<button class="btn btn-primary" type="submit">Button</button>
               </form>

           </div>

       </div>

   </div>
    
    
    </>)

}

export default Contact;