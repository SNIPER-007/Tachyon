import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

function BlogCarousel({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const showImage = (index) => {
    if (!images.length) return
    setActiveIndex((index + images.length) % images.length)
  }

  const handleTouchStart = (event) => {
    setTouchEnd(null)
    setTouchStart(event.targetTouches[0].clientX)
  }

  const handleTouchMove = (event) => {
    setTouchEnd(event.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      showImage(activeIndex + 1)
    }

    if (isRightSwipe) {
      showImage(activeIndex - 1)
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div className="blogCarousel" aria-label={`${title} image gallery`}>
      <div
        className="carouselViewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carouselTrack"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carouselSlide" key={`${title}-${index}`}>
              <img src={image} alt={`${title} ${index + 1}`} />
            </div>
          ))}
        </div>

        <motion.button
          type="button"
          className="carouselArrow prevArrow"
          aria-label="Previous image"
          onClick={() => showImage(activeIndex - 1)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          ‹
        </motion.button>

        <motion.button
          type="button"
          className="carouselArrow nextArrow"
          aria-label="Next image"
          onClick={() => showImage(activeIndex + 1)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          ›
        </motion.button>
      </div>

      <div className="carouselDots" aria-label="Image navigation dots">
        {images.map((_, index) => (
          <button
            key={`${title}-dot-${index}`}
            type="button"
            className={`carouselDot ${index === activeIndex ? "active" : ""}`}
            onClick={() => showImage(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function BlogArticle({ article, reverse }) {
  return (
    <motion.article
      className={`blogArticle ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="articleMedia">
        <BlogCarousel images={article.images} title={article.title} />
      </div>

      <div className="articleContent">
        <div className="articleMetaRow">
          <span className="articleBadge">{article.badge}</span>
          <span className="articleDate">{article.date}</span>
          <span className="articleReadTime">{article.readTime}</span>
        </div>

        <h2>{article.title}</h2>

        <div className="articleText">
          {article.description.map((paragraph, index) => (
            <p key={`${article.title}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  const articles = [
    {
      title: "Abhiyantriki 2025",
      badge: "Technical Fest",
      date: "2025",
      readTime: "3 min read",
      description: [
        "Team Tachyon Moto India proudly participated in Abhiyantriki, the annual technical festival, where we showcased the engineering behind our Formula-style racing motorcycle.",
        "Visitors explored our steel space-frame chassis, powertrain architecture, suspension system and manufacturing process while interacting directly with our team members.",
        "The exhibition became an opportunity to inspire aspiring engineers and motorsport enthusiasts by demonstrating how classroom concepts transform into a real racing machine.",
        "The event allowed us to spread awareness about student motorsports, engineering design and the collaborative effort behind building India's next generation racing motorcycles."
      ],
      images: [
        "/blogs/abhiyantriki1.jpeg",
        "/blogs/abhiyantriki2.jpeg"
      ]
    },
    {
      title: "Rider Training Program — Pune",
      badge: "Track Experience",
      date: "2025",
      readTime: "4 min read",
      description: [
        "Selected riders from Team Tachyon Moto India received an opportunity to undergo professional rider training in Pune.",
        "The program focused on racing fundamentals including body positioning, braking techniques, racing lines, apex selection, corner entry and exit strategies, throttle control and rider safety.",
        "The experience provided valuable exposure to professional motorsport practices while helping our riders understand how engineering and rider feedback work together to maximize on-track performance.",
        "This training marks another important milestone in preparing Team Tachyon Moto India for competitive motorsport events."
      ],
      images: [
        "/blogs/training1.jpeg",
        "/blogs/training2.jpeg",
        "/blogs/training3.jpeg",
        "/blogs/training4.jpeg",
        "/blogs/training5.jpeg"
      ]
    }
  ]

  return (
    <>
      <Navbar />

      <motion.section
        className="blogPage page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="blogGlow" />

        <div className="container blogHeader">
          <motion.span
            className="blogKicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Team Tachyon Moto India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            TACHYON JOURNAL
          </motion.h1>

          <motion.p
            className="blogSubtitle"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            Latest updates, competitions, workshops and milestones of Team Tachyon Moto India.
          </motion.p>
        </div>

        <div className="container blogList">
          {articles.map((article, index) => (
            <BlogArticle key={article.title} article={article} reverse={index % 2 === 1} />
          ))}
        </div>

        <style>{`\n
        .blogPage {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 12%, rgba(255,0,0,0.16), transparent 30%),
            radial-gradient(circle at 80% 78%, rgba(255,0,0,0.08), transparent 26%),
            linear-gradient(180deg, #000 0%, #050505 100%);
          padding-bottom: 100px;
        }

        .blogGlow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 0%, rgba(255,0,0,0.08), transparent 36%),
            radial-gradient(circle at 50% 100%, rgba(255,0,0,0.05), transparent 32%);
        }

        .blogHeader {
          position: relative;
          z-index: 1;
          padding-top: 36px;
          text-align: center;
        }

        .blogKicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.78);
          letter-spacing: 1.6px;
          text-transform: uppercase;
          font-size: 11px;
          backdrop-filter: blur(14px);
        }

        .blogHeader h1 {
          margin-bottom: 14px;
          text-shadow:
            0 0 26px rgba(255,0,0,0.35),
            0 0 60px rgba(255,0,0,0.12);
        }

        .blogSubtitle {
          max-width: 760px;
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.75;
          opacity: 0.84;
        }

        .blogList {
          position: relative;
          z-index: 1;
          margin-top: 64px;
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

        .blogArticle {
          display: flex;
          gap: 34px;
          align-items: stretch;
          padding: 24px;
          border-radius: 26px;
          background: linear-gradient(145deg, rgba(12,12,12,0.92), rgba(5,5,5,0.86));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 24px 60px rgba(0,0,0,0.42),
            inset 0 1px 0 rgba(255,255,255,0.02);
          backdrop-filter: blur(18px);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .blogArticle:hover {
          transform: translateY(-8px);
          border-color: rgba(255,80,80,0.28);
          box-shadow:
            0 0 26px rgba(255,0,0,0.2),
            0 28px 70px rgba(0,0,0,0.5);
        }

        .blogArticle.reverse {
          flex-direction: row-reverse;
        }

        .articleMedia {
          flex: 0 0 45%;
          min-width: 0;
        }

        .articleContent {
          flex: 1 1 55%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8px 4px;
        }

        .articleMetaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin-bottom: 16px;
        }

        .articleBadge,
        .articleDate,
        .articleReadTime {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.78);
          font-size: 12px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .articleBadge {
          background: linear-gradient(135deg, rgba(255,0,0,0.28), rgba(255,77,77,0.12));
          border-color: rgba(255,0,0,0.18);
          color: #fff;
          box-shadow: 0 0 18px rgba(255,0,0,0.08);
        }

        .articleContent h2 {
          margin-bottom: 16px;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.1;
        }

        .articleText {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .articleText p {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(255,255,255,0.78);
        }

        .blogCarousel {
          position: relative;
          width: 100%;
        }

        .carouselViewport {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          box-shadow: 0 16px 38px rgba(0,0,0,0.38);
          aspect-ratio: 4 / 3;
        }

        .carouselTrack {
          display: flex;
          height: 100%;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .carouselSlide {
          flex: 0 0 100%;
          height: 100%;
          overflow: hidden;
        }

        .carouselSlide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .carouselViewport:hover .carouselSlide img {
          transform: scale(1.03);
        }

        .carouselArrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          background: rgba(0,0,0,0.46);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
          z-index: 2;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px rgba(0,0,0,0.25);
        }

        .prevArrow {
          left: 14px;
        }

        .nextArrow {
          right: 14px;
        }

        .carouselDots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 14px;
        }

        .carouselDot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          border: none;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease, width 0.25s ease;
        }

        .carouselDot.active {
          width: 30px;
          background: linear-gradient(90deg, #ff1e1e, #ff6b6b);
          box-shadow: 0 0 14px rgba(255,0,0,0.4);
        }

        .carouselDot:hover {
          transform: scale(1.15);
        }

        @media (min-width: 769px) {
          .carouselArrow:hover {
            background: rgba(255,0,0,0.85);
            box-shadow: 0 0 18px rgba(255,0,0,0.4);
          }
        }

        @media (max-width: 1024px) {
          .blogArticle,
          .blogArticle.reverse {
            flex-direction: column;
          }

          .articleMedia,
          .articleContent {
            flex-basis: auto;
          }

          .articleContent {
            padding: 0;
          }
        }

        @media (max-width: 768px) {
          .blogPage {
            padding-bottom: 80px;
          }

          .blogHeader {
            padding-top: 18px;
          }

          .blogSubtitle {
            font-size: 15px;
          }

          .blogList {
            margin-top: 42px;
            gap: 24px;
          }

          .blogArticle {
            padding: 18px;
            border-radius: 22px;
            gap: 18px;
          }

          .articleContent h2 {
            font-size: 24px;
          }

          .articleText p {
            font-size: 14px;
            line-height: 1.8;
          }

          .carouselViewport {
            aspect-ratio: 16 / 11;
            border-radius: 18px;
          }

          .carouselArrow {
            display: none;
          }
        }

        `}</style>
      </motion.section>

      <Footer />
    </>
  )
}