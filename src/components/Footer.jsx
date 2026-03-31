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
            tachyonteam@gmail.com<br/>
            +91 98765 43210
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="col">
          <h3>QUICK LINKS</h3>

          <a href="/">Home</a>
          <a href="/team">Team</a>
          <a href="/bikes">Bikes</a>
          <a href="/about">About</a>
          <a href="/sponsors">Sponsors</a>
        </div>

        {/* SOCIAL */}
        <div className="col socialCol">
          <h3>CONNECT</h3>

          <div className="icons">
            <a href="#" className="icon">📷</a>
            <a href="#" className="icon">💼</a>
            <a href="#" className="icon">📘</a>
            <a href="#" className="icon">✖</a>
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
          background: linear-gradient(to top, #000, #0a0a0a);
          padding: 80px 0 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        /* LEFT */
        .leftCol .logo {
          letter-spacing: 4px;
          margin-bottom: 15px;
          text-shadow: 0 0 20px rgba(0,191,255,0.4);
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

        /* COLUMN */
        .col h3 {
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 15px;
          opacity: 0.8;
        }

        /* 🔥 FIXED LINK VISIBILITY */
        .footer .col a {
          display: block;
          font-size: 14px;
          color: rgba(255,255,255,0.9); /* 🔥 brighter */
          margin-bottom: 8px;
          transition: 0.3s;
        }

        .footer .col a:hover {
          color: #00f0ff;
        }

        /* SOCIAL */
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
          background: #00f0ff;
          color: black;
          transform: translateY(-4px);
          box-shadow: 0 0 15px rgba(0,191,255,0.6);
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

        /* 📱 MOBILE FIX */
        @media (max-width: 768px) {

          .footer {
            padding: 60px 0 20px;
          }

          .footerGrid {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: left; /* 🔥 LEFT ALIGN ALL */
          }

          .leftCol {
            text-align: left;
          }

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