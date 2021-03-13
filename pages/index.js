import Head from 'next/head'
import Particles from 'react-particles-js'
import AboutMe from '../components/AboutMe'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Dev & Prog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: 'square',
            stroke: {
              width: 6,
              color: '#709DA5'
            }
          }
        }
      }}
    />
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Services/>
    </div>
  )
}
