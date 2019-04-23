import React, { Component } from ‘react’;
import ‘./footer.css’;
import { Link } from ‘react-router-dom’;


function refreshPage() {
 window.location.reload();
}

export class index extends Component {
 render() {
 return (
 <div className=“footer”>
   <nav className=“navbar navbar-expand-lg navbar-light bg-light nav-pills nav-fill”>
     <a className=“nav-item nav-link”><Link className=“nav-item nav-link” to=‘/’><i className=“fas fa-map fa-lg”></i></Link></a>
     <a className=“nav-item nav-link” onClick = { refreshPage }><Link className=“nav-item nav-link” to=‘/’><i className=“fas fa-map-marker-alt fa-lg”></i></Link></a>
     <a className=“nav-item nav-link” href=“#”><img src=“rest-easy-logo.png” alt=“rest easy”></img></a>
     <a className=“nav-item nav-link” href=“#”><i className=“fas fa-plus fa-lg”></i></a>
     <a className=“nav-item nav-link”><Link className=“nav-item nav-link” to=‘/Settings’><i className=“fas fa-bars fa-lg”></i></Link></a>
   </nav>
 </div>
)
}
}

   export default index