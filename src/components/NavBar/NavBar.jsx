import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {/* <nav class="navbar sticky-top navbar-light bg-light">
      <a class="navbar-brand" href="#top">Sticky top</a>
      </nav> */}

      <body class="p-3 m-0 border-0 bd-example">

      {/* Sticky navbar */}
        <div class="sticky-navbar">
            {/* <div class="search-bar"> */}
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            {/* </div> */}
            <div class="logo">
              <Link to="/home">{ <img src="https://i.imgur.com/FM8b9Om.png" alt="Logo" />}</Link>
            </div>
            {/* <div class="welcome"> */}
              <span>Welcome, {user.name}</span>
              &nbsp;&nbsp;
              <Link to="" onClick={handleLogOut}>Log Out</Link>
              &nbsp; | &nbsp;
              <Link to="/orders/cart">Cart</Link>
            {/* </div> */}
        </div>
        <br/>
        
        {/* Drop down menu */}
        <div class="list-dropdown">
          <div class="btn-group">
            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              SHOP
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/shop/allCoffee">ALL COFFEE</a></li>
              <li><a class="dropdown-item" href="#">SINGLE ORIGIN</a></li>
              <li><a class="dropdown-item" href="#">BLENDS</a></li>
              <li><a class="dropdown-item" href="#">INSTANT COFFEE</a></li>
              <li><a class="dropdown-item" href="#">MERCHANDISE</a></li>
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
              <li><a class="dropdown-item" href="/aeropress">AEROPRESS</a></li>
              <li><a class="dropdown-item" href="/chemex">CHEMEX</a></li>
              <li><a class="dropdown-item" href="/fellowstagg">FELLOW STAGG</a></li>
              <li><a class="dropdown-item" href="/frenchpress">FRENCH PRESS</a></li>
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
              <li><a class="dropdown-item" href="#">ABOUT US</a></li>
              <li><a class="dropdown-item" href="#">SOURCING</a></li>
            </ul>
          </div>
        </div>
      </body>
    </nav>
  );
}