import { useState } from "react"

export default function ProjectDetail({ selectedProject, onBack }) {
  const rawImages = selectedProject.hideImage
    ? []
    : (selectedProject.images?.length
        ? selectedProject.images
        : selectedProject.cardImage
        ? [{ src: selectedProject.cardImage, fallback: selectedProject.cardFallback }]
        : []
      ).filter((img) => img.src && img.src !== "")

  const [failedSrcs, setFailedSrcs] = useState(new Set())
  const allImages = rawImages.filter((img) => !failedSrcs.has(img.src))

  const [activeIdx, setActiveIdx] = useState(0)
  const safeIdx = Math.min(activeIdx, Math.max(0, allImages.length - 1))
  const activeImage = allImages[safeIdx]

  const handleImgError = (src) => {
    setFailedSrcs((prev) => {
      const next = new Set(prev)
      next.add(src)
      return next
    })
    setActiveIdx((i) => Math.max(0, i - 1))
  }

  const getMediaType = (item) => {
    if (!item) return "image"
    if (item.type) return item.type
    const lower = item.src.toLowerCase()
    if (lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".mov")) {
      return "video"
    }
    if (lower.endsWith(".pdf")) {
      return "pdf"
    }
    return "image"
  }

  const activeType = getMediaType(activeImage)
  const fitContain = Boolean(selectedProject.fitContain)

  const techList = selectedProject.tech
    ? selectedProject.tech.split("•").map((t) => t.trim()).filter(Boolean)
    : []

  const features = selectedProject.features || [
    "Real-time Sensor Monitoring",
    "MQ2 Gas & Smoke Detection",
    "Emergency Alert System",
    "Configurable Thresholds",
    "Building Floor Map View",
    "Mobile Push Notifications",
  ]

  return (
    <section className="dp-page">
      <div className="dp-inner">
        <button className="dp-back" onClick={onBack}>
          ← Back to All Projects
        </button>

        <div className="dp-header">
          <h1 className="dp-title">{selectedProject.title}</h1>
          <div className="dp-chips">
            {selectedProject.inProgress && (
              <span className="dp-chip dp-chip-status">🚧 In Progress</span>
            )}
            {techList.map((t, i) => (
              <span key={i} className="dp-chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        {selectedProject.note && (
          <div className="dp-note">
            <strong>Status update</strong>
            <p>{selectedProject.note}</p>
          </div>
        )}

        {selectedProject.links && (
          <div className="dp-links">
            {selectedProject.links.figma && (
              <a
                href={selectedProject.links.figma}
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                View Figma Prototype ↗
              </a>
            )}
            {selectedProject.links.pdf && (
              <a
                href={selectedProject.links.pdf}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                Open Full PDF ↗
              </a>
            )}
            {selectedProject.links.live && (
              <a
                href={selectedProject.links.live}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                Live Demo ↗
              </a>
            )}
            {selectedProject.links.github && (
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                View on GitHub ↗
              </a>
            )}
          </div>
        )}

        {allImages.length > 0 && (
          <div className="dp-hero-wrap">
            {/* ถ้าเป็น PDF ให้ขยายกรอบกว้างเต็มตา แต่ถ้าเป็นรูป/วิดีโอมือถือให้ใช้กรอบเดิม */}
            <div
              className={`dp-hero-frame${
                fitContain && activeType !== "pdf" ? " dp-hero-contain" : " dp-hero-fixed"
              }`}
              style={
                activeType === "pdf"
                  ? {
                      width: "100%",
                      maxWidth: "960px",
                      height: "85vh",
                      margin: "0 auto",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      backgroundColor: "#141414",
                    }
                  : undefined
              }
            >
              {activeType === "video" ? (
                <video
                  key={activeImage?.src}
                  src={activeImage?.src}
                  controls
                  playsInline
                  className="dp-hero-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    backgroundColor: "#0a0a0a",
                  }}
                  onError={() => handleImgError(activeImage?.src)}
                />
              ) : activeType === "pdf" ? (
                <iframe
                  key={activeImage?.src}
                  src={`${activeImage?.src}#view=FitH`}
                  title={`${selectedProject.title || "Project"} PDF`}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    backgroundColor: "#1a1a1a",
                  }}
                />
              ) : (
                <img
                  key={activeImage?.src}
                  src={activeImage?.src}
                  alt={`${selectedProject.title || "Project"} screenshot ${safeIdx + 1}`}
                  className="dp-hero-img"
                  onError={() => handleImgError(activeImage?.src)}
                />
              )}

              {allImages.length > 1 && (
                <>
                  <button
                    className="dp-arrow dp-arrow-prev"
                    onClick={() =>
                      setActiveIdx(
                        (i) => (i - 1 + allImages.length) % allImages.length
                      )
                    }
                    aria-label="Previous media"
                  >
                    ‹
                  </button>
                  <button
                    className="dp-arrow dp-arrow-next"
                    onClick={() =>
                      setActiveIdx((i) => (i + 1) % allImages.length)
                    }
                    aria-label="Next media"
                  >
                    ›
                  </button>
                  <span className="dp-counter">
                    {safeIdx + 1} / {allImages.length}
                  </span>
                </>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="dp-thumbs">
                {allImages.map((img, idx) => {
                  const thumbType = getMediaType(img)
                  const isActive = idx === safeIdx
                  return (
                    <button
                      key={img.src}
                      className={`dp-thumb${isActive ? " active" : ""}`}
                      onClick={() => setActiveIdx(idx)}
                      aria-label={`View media ${idx + 1}`}
                      aria-current={isActive}
                    >
                      {thumbType === "video" ? (
                        <div
                          className="dp-thumb-img"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "4px",
                            background: "#161616",
                            color: isActive ? "#e6dcc8" : "#a3a3a3",
                            fontSize: "11px",
                            fontWeight: "500",
                            letterSpacing: "0.04em",
                          }}
                        >
                          <span style={{ fontSize: "15px" }}>▶</span>
                          <span>DEMO</span>
                        </div>
                      ) : thumbType === "pdf" ? (
                        <div
                          className="dp-thumb-img"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "4px",
                            background: "#161616",
                            color: isActive ? "#e6dcc8" : "#a3a3a3",
                            fontSize: "11px",
                            fontWeight: "500",
                            letterSpacing: "0.04em",
                          }}
                        >
                          <span style={{ fontSize: "15px" }}>📄</span>
                          <span>THESIS</span>
                        </div>
                      ) : (
                        <img
                          src={img.src}
                          alt=""
                          className="dp-thumb-img"
                          onError={() => handleImgError(img.src)}
                        />
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )}

        <div className="dp-section">
          <h2 className="dp-section-title">About this project</h2>
          <p className="dp-about">
            {selectedProject.details || selectedProject.desc}
          </p>
        </div>

        <div className="dp-rule" />

        <div className="dp-section">
          <h3 className="dp-section-subtitle">Key Features & Functionality</h3>
          <div className="dp-features">
            {features.map((f, i) => (
              <div key={i} className="dp-feature">
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="dp-rule" />

        <div className="dp-section">
          <h3 className="dp-section-subtitle">Technologies Used</h3>
          <div className="dp-tech-row">
            {techList.map((t, i) => (
              <span key={i} className="dp-tech-badge">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="dp-rule" />
      </div>
    </section>
  )
}
