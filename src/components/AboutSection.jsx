import { motion } from "framer-motion"
import { FaDownload, FaGraduationCap, FaBriefcase, FaBullseye } from "react-icons/fa"

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-content"
      >
        <div className="about-inner">
          <div className="about-image-wrap">
            <img src="/me/1.png" alt="Promporn Rangjob" className="about-image" />
          </div>

          <div className="about-content">
            <div className="about-header">
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
            </div>

            <div className="about-cards">
              <div className="about-card">
                <div className="about-card-icon"><FaGraduationCap /></div>
                <div>
                  <div className="about-card-kicker">Education</div>
                  <div className="about-card-title">
                    Computer Engineering · Kasetsart University (Sakon Nakhon) Year 4
                  </div>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon"><FaBriefcase /></div>
                <div>
                  <div className="about-card-kicker">Experience</div>
                  <div className="about-card-title">
                    Faculty of Science and Engineering Student Club Member
                  </div>
                </div>
              </div>

              <div className="about-card">
                <div className="about-card-icon"><FaBullseye /></div>
                <div>
                  <div className="about-card-kicker">Focus</div>
                  <div className="about-card-title">
                    Embedded / IoT Systems & Full-Stack Web Development
                  </div>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="/promporn rangjob.pdf" download className="button secondary">
                <FaDownload aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}