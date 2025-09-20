import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from   './Components/Hero/Hero.jsx'
import Program from './Components/Program/Program.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/campus/campus.jsx'
import TESTIMONIALS from './Components/TESTIMONIALS/TESTIMONIALS.jsx'
import Contact  from './Components/contact/contact.jsx'
import Footer from './Components/footer/footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className ="container">
      <Title subTitle="Our Program" Title="What We Offer"/>
      <Program/>
      <About/>
       <Title subTitle="Gallery" Title="Campus Photo"/>
       <Campus/>
       <Title subTitle="TESTIMONIALS" Title="What Students Says"/>
       <TESTIMONIALS/>
       <Title subTitle ='Contact Us'Title='Get in Touch'/>
       <Contact />
       <Footer/>
      </div>
    </>
  )
}

export default App
