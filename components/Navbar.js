import React from 'react'
import logo from '../images/Dev&Prog.svg'

const Navbar = () => {
      return (
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

            
                  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo d'entreprise" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">A propos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Foire aux questions</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                        </li>
                  </ul>
                  </div>
            </div>      
            </nav>
      )
}

export default Navbar
