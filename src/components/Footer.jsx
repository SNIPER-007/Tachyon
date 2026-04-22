import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footerTop">

        {/* LEFT */}
        <div className="col leftCol">
          <h3>QUICK LINKS</h3>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="/bikes">Bikes</Link>
            <Link to="/about">About</Link>
            <Link to="/sponsors">Sponsors</Link>
          </div>
        </div>

        {/* CENTER */}
        <div className="col centerCol">
          <h3>CONNECT</h3>

          <div className="icons">
            <a href="https://instagram.com/tachyon_moto_india" target="_blank" rel="noopener noreferrer" className="icon">
              <img src="/icons/instagram.png" alt="Instagram" />
            </a>

            <a href="https://www.linkedin.com/company/tachyon-moto-india/" target="_blank" rel="noopener noreferrer" className="icon">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col rightCol">

          <div className="rightContent">

            <img 
              src="/logos/tachyonlogo.png" 
              alt="Tachyon Moto India" 
              className="footerLogo"
            />

            <div className="infoBlock">
              <p>
                KJ Somaiya College of Engineering<br/>
                Vidyavihar East, Mumbai - 400077
              </p>

              <p>
                tachyonmoto.engg@somaiya.edu<br/>
                +91 98928 10010
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footerBottom">
        © 2026 Tachyon Racing Team. All rights reserved.
      </div>

      <style>{`

        .footer {
          background:
            radial-gradient(circle at top, rgba(255,0,0,0.06), transparent),
            linear-gradient(to top, #000, #0a0a0a);

          padding: 72px 0 24px; /* 🔥 balanced */
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        /* 🔥 GRID SYSTEM */
        .footerTop {
          display: grid;
          grid-template-columns: 1fr 1fr 1.4fr;
          gap: 48px; /* 🔥 consistent spacing */
          align-items: start;
        }

        /* 🔥 HEADINGS */
        .col h3 {
          font-size: 13px;
          letter-spacing: 1.2px;
          margin-bottom: 16px;
          opacity: 0.75;
        }

        /* 🔥 LINKS */
        .links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .links a {
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: 0.25s;
        }

        .links a:hover {
          color: #ff1e1e;
          transform: translateX(3px);
        }

        /* 🔥 CENTER */
        .centerCol {
          text-align: center;
        }

        .icons {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .icon {
          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: rgba(255,255,255,0.05);

          transition: 0.25s ease;
        }

        .icon img {
          width: 20px;
          height: 20px;
        }

        .icon:hover {
          background: #ff1e1e;
          transform: translateY(-3px);
          box-shadow: 0 0 18px rgba(255,0,0,0.6);
        }

        /* 🔥 RIGHT */
        .rightCol {
          display: flex;
          justify-content: flex-end;
        }

        .rightContent {
          display: flex;
          align-items: center;
          gap: 18px; /* 🔥 key spacing */
        }

        .footerLogo {
          width: 130px;
          flex-shrink: 0;
        }

        .infoBlock {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .infoBlock p {
          font-size: 13px;
          line-height: 1.5;
          opacity: 0.8;
          margin: 0;
        }

        /* 🔥 BOTTOM */
        .footerBottom {
          text-align: center;
          margin-top: 48px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          opacity: 0.5;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .footer {
            padding: 60px 0 20px;
          }

          .footerTop {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .centerCol {
            text-align: center;
          }

          .rightCol {
            justify-content: flex-start;
          }

          .rightContent {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .footerLogo {
            width: 140px;
          }

        }

      `}</style>

    </footer>
  )
}