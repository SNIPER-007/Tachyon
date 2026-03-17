import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Team(){

  const members = [
    {
      name: "Team Captain",
      role: "Mechanical Engineering",
      img: "/team/captain.jpg"
    },
    {
      name: "Design Lead",
      role: "Chassis & Aero",
      img: "/team/design.jpg"
    },
    {
      name: "Electronics Lead",
      role: "ECU & Sensors",
      img: "/team/electronics.jpg"
    }
  ]

  return(
    <>
      <Navbar/>

      <section style={{padding:"80px", textAlign:"center"}}>

        <h1>Our Team</h1>

        <div style={{
          display:"flex",
          justifyContent:"center",
          gap:"30px",
          marginTop:"40px"
        }}>

          {members.map((member,index)=>(
            <div key={index} style={{
              background:"#111",
              color:"white",
              padding:"20px",
              width:"250px"
            }}>

              <img 
                src={member.img}
                style={{
                  width:"100%",
                  height:"200px",
                  objectFit:"cover"
                }}
              />

              <h3>{member.name}</h3>
              <p>{member.role}</p>

            </div>
          ))}

        </div>

      </section>

      <Footer/>
    </>
  )
}