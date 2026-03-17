import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About(){

  return(

    <>
      <Navbar/>

      <section style={{padding:"80px", textAlign:"center"}}>

        <h1>About Tachyon</h1>

        <p style={{maxWidth:"700px", margin:"auto"}}>

          Tachyon is a student engineering council focused on designing
          and building high performance motorcycles. Our team combines
          innovation, mechanical engineering, electronics, and racing
          technology to create cutting-edge bikes.

        </p>

      </section>

      <Footer/>
    </>
  )
}