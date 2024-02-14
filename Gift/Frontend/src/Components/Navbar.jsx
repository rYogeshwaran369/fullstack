import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';
const Navbars = () => {
    return(
    <Navbar style={{height:70}}>
        <Navbar.Brand href="#">Gift's</Navbar.Brand>
        <Nav>
        {/* <Nav.Item icon={<HomeIcon />}><Link to='/'>Home</Link></Nav.Item> */}
        <Nav.Item><Link to='/cart'>Your Cart</Link></Nav.Item>
        <Nav.Item><Link to='/toys'>Toys</Link></Nav.Item>
        <Nav.Item><Link to='/books'>Books</Link></Nav.Item>
        <Nav.Item><Link to='/chocolates'>Chocolates</Link></Nav.Item>
        {/* <Link to='/books'><Nav.Item>Books</Nav.Item></Link> 
        <Nav.Menu title="Products">
           <Link to='/toys'><Nav.Item>Toys</Nav.Item></Link>
           <Link to='/books'><Nav.Item>Books</Nav.Item></Link> 
           <Link to='/chocolates'><Nav.Item>Chocolates</Nav.Item></Link>      
        </Nav.Menu> */}
        </Nav>
        <Nav pullRight>
        <Nav.Menu title="Profile">
            <Link to='/login'><Nav.Item>Login</Nav.Item></Link>
           <Link to='/register'> <Nav.Item>Registration</Nav.Item></Link>     
        </Nav.Menu>
        </Nav>
    </Navbar>
    )
};
export default Navbars;