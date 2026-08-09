import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="section-content contact-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">Computer Engineering Student | Frontend Developer | Flutter Enthusiast</p>
        <p className="section-description">
          I'm passionate about web development, mobile applications, and UI/UX. I'm currently looking for an internship where I can apply my skills, gain real-world experience, and continue growing as a software developer.
        </p>

        <motion.a
          href="mailto:promporn25102547@gmail.com"
          className="contact-console"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
        >
          <span className="contact-console-dots" aria-hidden="true">
            <span /><span /><span />
          </span>
          <span className="contact-console-line">
            <span className="contact-console-prompt">$</span> mailto{" "}
            <span className="contact-console-addr">promporn25102547@gmail.com</span>
            <span className="contact-console-cursor" aria-hidden="true" />
          </span>
        </motion.a>

        <div className="social-links">
          <a href="mailto:promporn25102547@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  )
}