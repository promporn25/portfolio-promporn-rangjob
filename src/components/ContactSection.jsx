import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="section-content contact-content"
        initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
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
          initial={{ opacity: 0, y: 24, scale: 0.92, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <span className="contact-console-dots" aria-hidden="true">
            <span /><span /><span />
          </span>
          <span className="contact-console-line">
            <span className="contact-console-prompt">$</span> Gmail{" "}
            <span className="contact-console-addr">promporn.rajob@gmail.com</span>
            <span className="contact-console-cursor" aria-hidden="true" />
          </span>
           <span className="contact-console-line">
            <span className="contact-console-prompt">$</span> Tel.{" "}
            <span className="contact-console-addr">0640952561</span>
            <span className="contact-console-cursor" aria-hidden="true" />
          </span>
        </motion.a>

        <div className="social-links">
          <a href="Gmail:promporn.rajob@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  )
}