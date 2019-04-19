import React, { Component } from 'react'
import './header.css';

export class index extends Component {
  render() {
    return (
      <div className="header">
        <nav class="navbar navbar-dark bg-dark justify-content-center">
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>

    )
  }
}

export default index