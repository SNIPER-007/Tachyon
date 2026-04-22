import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footerGrid">

        {/* LEFT */}
        <div className="col leftCol">
          <h2 className="logo">TACHYON</h2>

          <p className="address">
            KJ Somaiya College of Engineering<br/>
            Vidyavihar East, Mumbai - 400077<br/>
            Maharashtra, India
          </p>

          <p className="contact">
            tachyonmoto.engg@somaiya.edu<br/>
            +91 98928 10010
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="col">
          <h3>QUICK LINKS</h3>

          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/bikes">Bikes</Link>
          <Link to="/about">About</Link>
          <Link to="/sponsors">Sponsors</Link>
        </div>

        {/* SOCIAL */}
        <div className="col socialCol">
          <h3>CONNECT</h3>

          <div className="icons">
            <a 
  href="https://instagram.com/tachyon_moto_india" 
  target="_blank" 
  rel="noopener noreferrer"
  className="icon"
>
  <img src="/icons/instagram.png" alt="Instagram" />
</a>
            <a 
  href="https://www.linkedin.com/company/tachyon-moto-india/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="icon"
>
  <img src="/icons/linkedin.png" alt="LinkedIn" />
</a>
            {/* <a href="https://www.facebook.com/tachyonmoto" className="icon">📘</a> */}
            {/* <a href="https://twitter.com/tachyon_moto" className="icon">✖</a> */}
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footerBottom">
        © 2026 Tachyon Racing Team. All rights reserved.
      </div>

      <style>
        {`

        .footer {
          background:
            radial-gradient(circle at top, rgba(255,0,0,0.08), transparent),
            linear-gradient(to top, #000, #0a0a0a);

          padding: 80px 0 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        /* 🔥 LOGO */
        .leftCol .logo {
          letter-spacing: 4px;
          margin-bottom: 15px;

          text-shadow:
            0 0 15px rgba(255,0,0,0.6),
            0 0 30px rgba(255,0,0,0.2);
        }

        .address {
          line-height: 1.6;
          opacity: 0.7;
          margin-bottom: 15px;
        }

        .contact {
          font-size: 14px;
          opacity: 0.9;
        }

        /* HEADINGS */
        .col h3 {
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 15px;
          opacity: 0.8;
        }

        /* 🔥 LINKS */
        .footer .col a {
          display: block;
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          margin-bottom: 8px;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer .col a:hover {
          color: #ff1e1e;
          transform: translateX(4px);
        }

        /* 🔥 SOCIAL */
        .icons {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          font-size: 16px;

          transition: 0.3s;
        }

        .icon:hover {
          background: #ff1e1e;
          color: black;

          transform: translateY(-4px);
          box-shadow: 0 0 20px rgba(255,0,0,0.6);
        }

        /* BOTTOM */
        .footerBottom {
          text-align: center;
          margin-top: 60px;
          padding-top: 15px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          opacity: 0.5;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .footer {
            padding: 60px 0 20px;
          }

          .footerGrid {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: left;
          }

          .leftCol,
          .col {
            text-align: left;
          }

          /* 🔥 ONLY SOCIAL CENTER */
          .socialCol {
            text-align: center;
          }

          .icons {
            justify-content: center;
          }

          .footerBottom {
            margin-top: 40px;
          }

        }

        `}
      </style>

    </footer>
  )
}