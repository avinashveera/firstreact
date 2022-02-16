import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';



import {Routes, Route } from 'react-router-dom';

function App() {

  return (<>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
   
      </Routes>
 
  
  </>)
}

export default App;


{/* <div className="container-fluid">
<div className="row">
    <div className="col-10 max-auto">

    </div>
</div>
</div> */}
