import React from 'react'
import author from '../images/photo.jpg'

const AboutMe = () => {
      return (
            <div className="container py-5">
                  <div className="row">
                        <div className="col-lg-6 col-xm-12">
                              <div className="photoWrap mb-5">
                                    <img className="profilImg" src={author} alt="portrait"/>
                              </div>
                        </div>
                        <div className="col-lg-6 col-xm-12">
                              <h1 className="aboutHeading">A propos</h1>
                              <p className="text-justify">Depuis toujours attiré par les métiers du web, je tente l'expérience d'auto-entrepreneur à l'âge de 20 ans, sans être formé, je repars donc travailler dans divers emplois.
                               Après 18 mois chez Fruehauf, je découvre OpenClassRooms qui m'offre l'opportunité de me former au métier qui me passionne depuis toujours : Développeur Web. Après un moment de réflexion,
                               je décide de me lancer et de tenter ma chance. J'obtiens donc mon diplôme en novembre 2020..</p>
                        </div>
                  </div>
            </div>
      )
}

export default AboutMe