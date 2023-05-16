import { Badge, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Cards } from './components/card';

import Stateless from './components/stateless';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const[value, setValue]=useState("selva")
  
  const data = [
    {
      productImage: require("./webpageimage/nokia-g21.jpeg"),
      productName: "Nokia G21 128 GB, 6 GB RAM, Nordic Blue, Mobile Phone",
      price: "₹13,499.00 20% Off Original M.R.P: ₹16,999.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      productImage: require("./webpageimage/redmi-a1.jpeg"),
      productName: "Redmi A1 32 GB, 2 GB RAM, Light Green Mobile Phone",
      price: "₹₹6,499.00 27% Off M.R.P: ₹8,999.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      productImage: require("./webpageimage/vivo-y33s.jpeg"),
      productName: "VIVO Y33s 128 GB, 8 GB RAM, Mirror Black, Mobile Phone",
      price: "₹15,199.00 30% Off M.R.P: ₹21,990.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      productImage: require("./webpageimage/realme-narzo-50i.jpeg"),
      productName: "Realme Narzo 50i Prime 64 GB, 4 GB RAM, Dark Blue, Mobile Phone",
      price: "₹8,999.00 10% Off M.R.P: ₹9,999.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      productImage: require("./webpageimage/motorola-moto-g42.jpeg"),
      productName: "Motorola Moto G42 64GB, 4GB RAM, Atlantic Green, Mobile Phone",
      price: "₹9,999.00 41% Off M.R.P: ₹16,999.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      productImage: require("./webpageimage/oneplus-nord-ce-2-lite.png"),
      productName: "OnePlus Nord CE 2 Lite 5G,128 GB,6 GB RAM,Blue Tide,Mobile Phone",
      price: "₹18,990.00 5% Off M.R.P: ₹19,999.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      productImage: require("./webpageimage/redmi-10.jpeg"),
      productName: "Redmi 10 128 GB, 6 GB RAM, Pacific Blue, Mobile Phone",
      price: "₹11,999.00 29% Off M.R.P: ₹16,999.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      productImage: require("./webpageimage/tecno-pova3.jpeg"),
      productName: "Tecno POVA3 64 GB, 4 GB RAM, Eco Black, Mobile Phone with 7000 mAh Mega Battery",
      price: "₹8,999.00 37% Off M.R.P: ₹14,499.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      productImage: require("./webpageimage/oneplus-nord-ce-3-lite.jpeg"),
      productName: "OnePlus Nord CE 3 Lite 5G 256 GB, 8 GB RAM, Chromatic Gray, Mobile Phone",
      price: "₹19,799.00 10% Off M.R.P:₹21,999.00 (Incl. of all taxes)",
      rating: "⭐⭐⭐⭐⭐"
    }

];
  return (
    <div className='App'>

<div className=''>
     <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">WELCOME!🎈</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="/prod.productName">
                All products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Popular item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                New arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='template'>
      
      
    </div>
    <div className='cart-value'>
        
        <Badge bg="success">
          🛒Cart {count}
        </Badge>
        </div>
        {/* <div className='background'>
      <marquee width="60%" direction="left" scrollamount="20" height="100px">
       <h1><i>SALE SALE SALE !!!! 100%</i></h1>
     </marquee>
     <marquee width="60%" direction="right" scrollamount="20" height="100px">
       <h1><i>grab your dream mobile now with exciting offers<span>🥳🎉🎊🎁🎈</span></i></h1>
     </marquee>
      </div>
       */}
      <div className='card-container'>
       {data.map((prod,idx)=> <Cards
        key = {idx}
        idx = {idx}
        prod={prod}
        count={count}
        setCount={setCount}/>      
  )}
       
     </div> 
     <Stateless/> 
    
    </div>
    </div>
  );
    
  }
  
      {/*
      <Button
      name="Mybutton"
      bgClr="yellow"
      clr="red"
      onClick={()=>console.log(value)}

      />
  */}

export default App;

{/*Components - In depth
Component life cycle
Stateful and stateless components
Reusable components 
Passing dynamic data to component
Introduction to Hook */}
