import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service';


export default function NavBar(props) {
    const { user, setUser } = props;
    function handleLogout() {
        userService.logOut();
        setUser(null);
    }
    return <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        <p>Welcome, {user.name}!</p>
        <Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
}