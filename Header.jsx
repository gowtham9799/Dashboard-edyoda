import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsSpeedometer2 } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { Link} from 'react-router-dom';


function Header() {


  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{height:'110px'}}>
      <Container>
      <Link className='lin' to={"/"}>
        <Navbar.Brand style={{color:'white',marginLeft:'5rem'}} >PRODUCT ADMIN</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto1">

          <Link className='lin'  to={"/Dashboard"}>
            <div className='nav-col1' style={{marginLeft:'12rem',width:'100px',height:'100px'}}>
              <div className='nav-col2'>
            < BsSpeedometer2 className='nav-col' style={{width:'30px',height:'30px',color:'white',marginLeft:'30px',marginTop:'21px'}}/>
            <Nav.Link  className='nav-col' style={{color:'white',paddingLeft:'10px'}} href="#Dashboard">Dashboard </Nav.Link>
            </div>
            </div>
            </Link>

            <Link className='lin' to={"/Product"}>
            <div className='nav-col1' style={{marginLeft:'5rem',width:'100px',height:'100px'}}>
            <div className='nav-col2' >
            < AiOutlineShoppingCart className='nav-col' style={{width:'30px',height:'30px',color:'white',marginLeft:'30px',marginTop:'21px'}}/>
            <Nav.Link className='nav-col' style={{color:'white',paddingLeft:'20px'}} >Product</Nav.Link>
            </div>
            </div>
            </Link>

            <Link className='lin' to={"/Accounts"}>
            <div className='nav-col1' style={{marginLeft:'5rem',width:'100px',height:'100px'}}>
            <div className='nav-col2'>
            < FaRegUser className='nav-col' style={{width:'30px',height:'30px',color:'white',marginLeft:'35px',marginTop:'21px'}}/>
            <Nav.Link className='nav-col cont' style={{color:'white' ,paddingLeft:'20px'}} >Accounts</Nav.Link>
            </div>
 </div>
 </Link>

            <Nav.Link style={{color:'white',marginLeft:'12rem',marginTop:'35px'}} ><Link className='lin' style={{color:'white',}} to={"/Login"}>Admin,Logout </Link></Nav.Link>
         

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;