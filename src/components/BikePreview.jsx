import { Link } from "react-router-dom"

export default function BikePreview() {
  return (
    <section style={{ padding: "80px", textAlign: "center" }}>
      <h2>Our Motorcycles</h2>

      <Link to="/bikes">
        <button
  style={{
    marginTop: "20px",
    padding: "10px 25px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer"
  }}
  onClick={() => window.location.href = "/bikes"}
>
  View Bikes
</button>
      </Link>
    </section>
  )
}