import React from 'react'
import Typed from 'react-typed'

const Header = () => {
      return (
            <div className="header-wraper">
                  <div className="main-info">
                        <h1>Dev&Prog</h1>
                        <h2>Développement Web & Mobile</h2>

                        <Typed 
                              className="typed-text"
                              strings={["Web Design", "Web Development", "Application Mobile", "Application Web", "Campagne Facebook Ads", "Campagne Google Ads"]}
                              typeSpeed={40}
                              backSpeed={60}
                              loop
                        />
                        <a href="#" className="btn-main-offer">Contactez-moi</a>
                  </div>
            </div>
      )
}

export default Header
