import React, { Component } from 'react'
import './footer.css';

function refreshPage(){ 
  window.location.reload(); 
}

export class index extends Component {
  render() {
    return (
      <div className="footer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pills nav-fill">
          <a className="nav-item nav-link" href="#">Rest Easy</a>
          <a className="nav-item nav-link" href="#">Add Review</a>
          <a className="nav-item nav-link active" href="#">Map</a>
          <a className="nav-item nav-link" href="#" onClick={ refreshPage }><span>My Location</span></a>
          <a className="nav-item nav-link" href="#">Settings</a>
        </nav>
      </div>

    )
  }
}

export default index