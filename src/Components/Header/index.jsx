import React, { Component } from 'react'
import './header.css';
// import './SearchBox';

// import SearchBar from './SearchBox';

export class Header extends Component {
  render() {
    return (
      <header className="container-fluid header">
        <div className="row">
          <div className="col-sm-12">

            {/* <input className="text-center" type="search" placeholder="Search" aria-label="Search" /> */}
            
          </div>
        </div>
      </header>

    )
  }
}

{/* <div className="header">
<nav className="navbar-light bg-light p-2">
  <form className="form-inline">
    <input className="form-control text-center" type="search" placeholder="Search" aria-label="Search" />
 </form>
</nav> 
</div> */}

export default Header;