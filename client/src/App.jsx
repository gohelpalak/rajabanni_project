// import React from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import About from './components/About'
// import Products from './components/Products'
// import Reviews from './components/Reviews'
// import Contact from './components/Contact'
// import Footer from './components/Footer'


// export default function App() {
// return (
// <div className="app-root">
// <Header />
// <main>
// <Hero />
// <About />
// <Products />
// <Reviews />
// <Contact />
// </main>
// <Footer />
// </div>
// )
// }

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Services/> */}
        <Pricing/>
        <Gallery/>
        {/* <Products /> */}
        {/* <Reviews /> */}
        <Contact />
         <ToastContainer position="top-right" autoClose={3000} />
      </main>
      <Footer />
    </div>
  )
}
