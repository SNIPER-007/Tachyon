export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footerGrid">

        {/* 🔥 LEFT - LOGO + ADDRESS */}
        <div className="col">
          <h2 className="logo">TACHYON</h2>

          <p className="address">
            KJ Somaiya College of Engineering<br/>
            Vidyavihar East, Mumbai - 400077<br/>
            Maharashtra, India
          </p>
        </div>

        {/* 📞 CENTER - CONTACT */}
        <div className="col">
          <h3>GET IN TOUCH</h3>

          <p>tachyonteam@gmail.com</p>
          <p>+91 98765 43210</p>
        </div>

        {/* 🔗 RIGHT - LINKS */}
        <div className="col">
          <h3>QUICK LINKS</h3>

          <a href="/">Home</a>
          <a href="/team">Team</a>
          <a href="/bikes">Bikes</a>
          <a href="/about">About</a>
          <a href="/sponsors">Sponsors</a>
        </div>

        {/* 🌐 SOCIAL */}
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

      {/* 🔥 BOTTOM BAR */}
      <div className="footerBottom">
        © 2026 Tachyon Racing Team. All rights reserved.
      </div>

      {/* STYLES */}
      <style>
        {`
        .footer {
          background: linear-gradient(to top, #000, #0a0a0a);
          padding: 70px 0 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footerGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 50px;
        }

        /* COLUMN */
        .col h3 {
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 15px;
          opacity: 0.8;
        }

        .col p, .col a {
          font-size: 14px;
          opacity: 0.7;
          margin-bottom: 8px;
          display: block;
          transition: 0.3s;
        }

        .col a:hover {
          color: #00f0ff;
          opacity: 1;
        }

        /* LOGO */
        .logo {
          letter-spacing: 4px;
          margin-bottom: 15px;

          text-shadow:
            0 0 20px rgba(0,191,255,0.4);
        }

        .address {
          line-height: 1.6;
          opacity: 0.6;
        }

        /* SOCIAL */
        .icons {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .icon {
          width: 40px;
          height: 40px;
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
          margin-top: 50px;
          padding-top: 15px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          opacity: 0.5;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .footerGrid {
            gap: 30px;
          }
        }
        `}
      </style>

    </footer>
  )
}