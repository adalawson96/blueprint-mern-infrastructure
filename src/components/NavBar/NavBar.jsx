import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    // <nav>
    //   <Link to="/home">{ <img src="https://i.imgur.com/FM8b9Om.png" alt="Logo" />}</Link>
    //   &nbsp;&nbsp;
    //   <span>Welcome, {user.name}</span>
    //   &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders/cart">Cart</Link>
    //   <br/>
    //   <Link to="/shop">Shop</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders">Order History</Link>
    // </nav>

    <nav>
      <body class="p-3 m-0 border-0 bd-example">
        <Link to="/home">{ <img src="https://i.imgur.com/FM8b9Om.png" alt="Logo" />}</Link>
        &nbsp;&nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/cart">Cart</Link>
        <br/>
        
        <div class="btn-group">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Link to="/shop">Shop</Link>
          </button>
          <ul class="dropdown-menu">
            <Link to="/shop/allCoffee">All Coffee</Link><br/>
            <Link to="/shop/allCoffee">Single Origin</Link><br/>
            <Link to="/shop/allCoffee">Blends</Link><br/>
            <Link to="/shop/allCoffee">Instant Coffee</Link><br/>
            <Link to="/shop/allCoffee">Merhcandise</Link>
            {/* <li><a class="dropdown-item" href="#">ALL COFFEE</a></li>
            <li><a class="dropdown-item" href="#">SINGLE ORIGIN</a></li>
            <li><a class="dropdown-item" href="#">BLENDS</a></li>
            <li><a class="dropdown-item" href="#">INSTANT COFFEE</a></li>
            <li><a class="dropdown-item" href="#">MERCHANDISE</a></li> */}
          </ul>
        </div>

        <div class="btn-group">
          <button class="btn btn-secondary btn-sm" type="button">
            BREW GUIDES
          </button>
          <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden"></span>
          </button>
          <ul class="dropdown-menu">
            {/* <li><a class="dropdown-item" href="#">AEROPRESS</a></li>
            <li><a class="dropdown-item" href="#">CHEMEX</a></li>
            <li><a class="dropdown-item" href="#">FELLOW STAGG</a></li>
            <li><a class="dropdown-item" href="#">FRENCH PRESS</a></li>
            <li><a class="dropdown-item" href="#">MERCHANDISE</a></li> */}
          </ul>
        </div>

        <div class="btn-group">
          <button class="btn btn-secondary btn-sm" type="button">
            LOCATIONS 
          </button> 
        </div>

        <div class="btn-group">
          <button class="btn btn-secondary btn-sm" type="button">
            WHOLESALE
          </button> 
        </div>

        <div class="btn-group">
          <button class="btn btn-secondary btn-sm" type="button">
            LEARN
          </button>
          <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden"></span>
          </button>
          <ul class="dropdown-menu">
            {/* <li><a class="dropdown-item" href="#">ABOUT US</a></li>
            <li><a class="dropdown-item" href="#">SOURCING</a></li> */}
          </ul>
        </div>
      </body>
    </nav>
  );
}