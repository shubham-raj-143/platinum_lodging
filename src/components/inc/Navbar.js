import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar(){
    return(
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">Platinum Lodging</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">About Us</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link">Contact Us</Link>
              </li>
              
                </ul>
            
          </div>
        </div>
      </nav>
                    </div>
                </div>
            </div>

        </div>
        
    );
}

export default Navbar;