import { Link } from "react-router-dom"

export default function AboutPreview(){

  return(

    <section style={{
      padding:"80px",
      background:"#111",
      color:"white",
      textAlign:"center"
    }}>

      <h2>About Tachyon</h2>

      <p>
        Tachyon is a student engineering team focused on designing
        and building high performance racing motorcycles.
      </p>

      <Link to="/about">
        <button
  style={{
    marginTop: "20px",
    padding: "10px 25px",
    background: "white",
    color: "black",
    border: "none",
    cursor: "pointer"
  }}
  onClick={() => window.location.href = "/about"}
>
  Learn More
</button>
      </Link>

    </section>

  )

}