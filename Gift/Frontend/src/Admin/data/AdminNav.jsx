import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';
const AdminNavbars = () => {
    return(
    <Navbar>
        <Navbar.Brand href="#">Gift's</Navbar.Brand>
        <Nav>
        <Nav.Item icon={<HomeIcon />}><Link to='/AdminDash'>Dashboard</Link></Nav.Item>
        <Nav.Item><Link to='/admin_pro'>Products</Link></Nav.Item>
        <Nav.Item><Link to='/'>User's Page</Link></Nav.Item>
       
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
export default AdminNavbars;