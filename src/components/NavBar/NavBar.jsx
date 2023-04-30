import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/home">{ <img src="https://i.imgur.com/FM8b9Om.png" alt="Logo" />}</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/cart">Cart</Link>
      <br/>
      <Link to="/shop">Shop</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Order History</Link>
    </nav>
  );
}