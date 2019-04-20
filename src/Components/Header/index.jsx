import React, { Component } from 'react'
import './header.css';

export class index extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar-light bg-light p-2">
          <form className="form-inline">
            <input className="form-control text-center" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
        </nav>
      </div>

    )
  }
}

export default index