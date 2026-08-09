import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="experience-section">
      <div className="section-content">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Experience
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          Experience & Activities
        </motion.h2>

        {experience.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <FaBriefcase aria-hidden="true" />
            </div>
            <p className="empty-state-title">No experience added yet</p>
            <p className="empty-state-desc">
              Add entries to the <code>experience</code> array in App.jsx,
              e.g. <code>{'{ title: "...", desc: "..." }'}</code>, and they
              will appear here.
            </p>
          </div>
        ) : (
          <div className="experience-list">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                whileHover={{ x: 6 }}
                className={`experience-card${item.images?.length ? " experience-card--media" : ""}`}
              >
                <span className="experience-card-index">{String(index + 1).padStart(2, "0")}</span>
                {/* Content wrapper clips (overflow: hidden) so images can
                    never spill past the card's padded edge. The dot marker
                    on .experience-card itself stays outside this wrapper,
                    so it's unaffected by the clipping. */}
                <div className="experience-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.images?.length > 0 ? (
                    <div className="experience-card-gallery">
                      {item.images.map((img, i) => {
                        const src = typeof img === "string" ? img : img.src
                        const capTitle = typeof img === "string" ? null : img.title
                        const capDesc = typeof img === "string" ? null : img.desc

                        const isContain =
                          typeof img === "object" && img.fit === "contain"

                        return (
                          <figure key={`${src}-${i}`} className="experience-gallery-item">
                            <div
                              className={`experience-gallery-media ${isContain
                                  ? "experience-gallery-media--contain"
                                  : "experience-gallery-media--cover"
                                }`}
                            >
                              <img
                                src={src}
                                alt={
                                  capTitle ||
                                  `${item.title} activity photo ${i + 1}`
                                }
                                className="experience-card-gallery-img"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>

                            {(capTitle || capDesc) && (
                              <figcaption className="experience-gallery-caption">
                                {capTitle && (
                                  <span className="experience-gallery-caption-title">
                                    {capTitle}
                                  </span>
                                )}

                                {capDesc && (
                                  <span className="experience-gallery-caption-desc">
                                    {capDesc}
                                  </span>
                                )}
                              </figcaption>
                            )}
                          </figure>
                        )
                      })}
                    </div>
                  ) : item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ marginTop: '12px', borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
                    />
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}