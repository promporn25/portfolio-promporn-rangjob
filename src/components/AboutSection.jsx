import { motion } from "framer-motion"
import { FaDownload, FaGraduationCap, FaBriefcase, FaBullseye } from "react-icons/fa"

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-content">
        <div className="about-inner">
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/me/1.png" alt="Promporn Rangjob" className="about-image" />
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-header"
              initial={{ opacity: 0, y: 26, scale: 0.96, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="section-label">About Me</p>
              <h2 className="about-title">
                Computer Engineering student, building{" "}
                <span className="about-highlight">web &amp; mobile products</span>{" "}
                end to end.
              </h2>
              <p className="section-description">
                Fourth-year Computer Engineering student at Kasetsart University, Chalermphrakiat Sakon Nakhon Province Campus.
                Passionate about building responsive web applications and mobile applications, with experience in Frontend Development, Mobile App Development, and Embedded / IoT systems.
              </p>
            </motion.div>

            <div className="about-cards">
              {[
                { icon: <FaGraduationCap />, kicker: "Education", title: "Computer Engineering · Kasetsart University (Sakon Nakhon) Year 4" },
                { icon: <FaBriefcase />, kicker: "Experience", title: "Faculty of Science and Engineering Student Club Member" },
                { icon: <FaBullseye />, kicker: "Focus", title: "Embedded / IoT Systems & Full-Stack Web Development" },
              ].map((card, i) => (
                <motion.div
                  key={card.kicker}
                  className="about-card"
                  initial={{ opacity: 0, y: 24, scale: 0.92, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
                >
                  <div className="about-card-icon">{card.icon}</div>
                  <div>
                    <div className="about-card-kicker">{card.kicker}</div>
                    <div className="about-card-title">{card.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="about-cta"
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <a href="/promporn rangjob.pdf" download className="button secondary">
                <FaDownload aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}