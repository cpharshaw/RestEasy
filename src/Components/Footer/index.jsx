import React, { Component } from 'react'
import './footer.css';
import { Link } from 'react-router-dom'


function refreshPage() {
  window.location.reload();
}

export class index extends Component {
  render() {
    return (
      <footer className="container-fluid footer">
        <div className="row">
          <div className="col-sm-12">

            <div className="mt-2 row nav-pills nav-fill d-flex align-items-center justify-content-center">

              <a className="nav-item nav-link">
                <img src="rest-easy-logo.jpg" alt="rest easy" />
              </a>

              <a className="nav-item nav-link">
                <Link to="/Review">
                  <i className="fas fa-plus fa-lg" />
                </Link>
              </a>

              <a className="nav-item nav-link">
                <Link to="/">
                  <i className="fas fa-map fa-lg" />
                </Link>
              </a>

              <a className="nav-item nav-link">
                <span><i className="fas fa-map-marker-alt fa-lg" /></span>
              </a>

              <a className="nav-item nav-link">
                <Link className="" to='/Settings'>
                  <i className="fas fa-bars fa-lg" />
                </Link>
              </a>
            </div>

          </div>
        </div>
      </footer>
    )

    {/*<div className="footer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pills nav-fill">*/}

    {/* <a className="nav-item nav-link" >
            <img src="rest-easy-logo.jpg" alt="rest easy" />
          </a> */}

    {/* <a className="nav-item nav-link" >
            <i className="fas fa-plus fa-lg" />
          </a> */}

    {/* <a className="nav-item nav-link">
            <Link className="nav-item nav-link" to='/'>
              <i className="fas fa-map fa-lg" />
            </Link>
          </a> */}

    {/* <a className="nav-item nav-link"  onClick={refreshPage}>
            <span><i className="fas fa-map-marker-alt fa-lg"/></span>
          </a> */}

    {/* <a className="nav-item nav-link">
            <Link className="nav-item nav-link" to='/Settings'>
              <i className="fas fa-bars fa-lg" />
            </Link>
          </a> */}

    {/* </nav>
      </div>  */}


  }
}

export default index