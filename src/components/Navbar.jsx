import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import { HiOutlineArrowUpRight } from "react-icons/hi2"

export default function Navbar() {
  const [open, setOpen] = useState(false)

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

  // Lock body scroll while the mobile menu is open, and allow closing it
  // with the Escape key — otherwise the menu can feel "stuck" on mobile.
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      const onKeyDown = (e) => {
        if (e.key === "Escape") setOpen(false)
      }
      window.addEventListener("keydown", onKeyDown)
      return () => {
        document.body.style.overflow = prevOverflow
        window.removeEventListener("keydown", onKeyDown)
      }
    }
  }, [open])

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

        {/* Backdrop — tapping anywhere outside the menu panel closes it */}
        {open && (
          <div
            className="nav-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

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
    </nav>
  )
}
