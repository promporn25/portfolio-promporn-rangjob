import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import { HiOutlineArrowUpRight } from "react-icons/hi2"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // Scroll progress reads as a signal trace filling in as the visitor moves
  // through the page — a functional echo of the site's circuit motif.
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  // Scroll to the target section without letting the browser append the
  // "#about" style hash to the address bar.
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const target = id ? document.getElementById(id) : null
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <motion.div
          className="brand"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="brand-dot" aria-hidden="true" />
          PROMPORN RANGJOB
        </motion.div>

        <motion.div
          className={`nav-links${open ? " open" : ""}`}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#contact"
          className="nav-cta"
          onClick={(e) => handleNavClick(e, "#contact")}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <span>Get in Touch</span>
          <HiOutlineArrowUpRight className="nav-cta-icon" aria-hidden="true" />
        </motion.a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="navbar-progress-track" aria-hidden="true">
        <div className="navbar-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </nav>
  )
}