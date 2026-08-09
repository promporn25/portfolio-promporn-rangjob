import { motion } from "framer-motion"
import { FaCode } from "react-icons/fa"

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-content">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12, scale: 0.9, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 26, scale: 0.95, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          Technologies I Use
        </motion.h2>
        <motion.p
          className="section-description skills-intro"
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          The stack I reach for most often, grouped by where it sits in a project.
        </motion.p>

        {skills.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <FaCode aria-hidden="true" />
            </div>
            <p className="empty-state-title">No skills added yet</p>
            <p className="empty-state-desc">
              Add entries to the <code>skills</code> array in App.jsx as groups.
            </p>
          </div>
        ) : (
          <div className="skills-groups">
            {skills.map((group, gi) => (
              <motion.div
                key={gi}
                className="skills-group"
                initial={{ opacity: 0, y: 30, scale: 0.94, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: gi * 0.08 }}
              >
                <h3 className="skills-group-title">
                  <span className="skills-group-index">{String(gi + 1).padStart(2, "0")}</span>
                  {group.category}
                </h3>
                <div className="skills-grid">
                  {group.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 18, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                      whileHover={{ y: -6 }}
                      className="skill-card"
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <h3>{skill.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}