import { useState } from "react"

export default function ProjectDetail({ selectedProject, onBack }) {
  // Allow project to opt-out of showing images (hideImage).
  const rawImages = selectedProject.hideImage
    ? []
    : (selectedProject.images?.length
        ? selectedProject.images
        : selectedProject.cardImage
        ? [{ src: selectedProject.cardImage, fallback: selectedProject.cardFallback }]
        : [])
      .filter((img) => img.src && img.src !== "")

  // Track srcs that failed to load — these are dropped entirely rather than
  // swapped to the Unsplash fallback, so the gallery never shows stock photos.
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
    // If the active image failed, step the index back so it stays in range.
    setActiveIdx((i) => Math.max(0, i - 1))
  }

  // ตรวจสอบประเภทไฟล์อัตโนมัติ (รองรับทั้งแบบระบุ type และดูจากนามสกุลไฟล์)
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
                View Thesis PDF ↗
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
            <div className={`dp-hero-frame${fitContain ? " dp-hero-contain" : " dp-hero-fixed"}`}>
              {activeType === "video" ? (
                <video
                  key={activeImage?.src}
                  src={activeImage?.src}
                  controls
                  playsInline
                  className="dp-hero-img"
                  style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "#000" }}
                  onError={() => handleImgError(activeImage?.src)}
                />
              ) : activeType === "pdf" ? (
                <iframe
                  key={activeImage?.src}
                  src={activeImage?.src}
                  title={`${selectedProject.title || "Project"} PDF`}
                  className="dp-hero-img"
                  style={{ width: "100%", height: "550px", border: "none", backgroundColor: "#fff" }}
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
                  return (
                    <button
                      key={img.src}
                      className={`dp-thumb${idx === safeIdx ? " active" : ""}`}
                      onClick={() => setActiveIdx(idx)}
                      aria-label={`View media ${idx + 1}`}
                      aria-current={idx === safeIdx}
                    >
                      {thumbType === "video" ? (
                        <div
                          className="dp-thumb-img"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#1e293b",
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          ▶ Video
                        </div>
                      ) : thumbType === "pdf" ? (
                        <div
                          className="dp-thumb-img"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#dc2626",
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          📄 PDF
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
