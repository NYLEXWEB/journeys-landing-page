import { useState } from 'react'

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  const [copied, setCopied] = useState(false)
  const phoneNumber = '+91 98470 30110'
  const rawNumber = '+919847030110'
  const whatsappUrl = `https://wa.me/919847030110?text=${encodeURIComponent(
    'Hello, I would like to inquire about curating our trip.'
  )}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="canvas-wrapper">
      <div className="canvas-overlay" aria-hidden="true" />

      {/* Main Editorial Stage */}
      <main className="atelier-stage">
        {/* Client Logo */}
        <div className="logo-frame">
          <img
            src="/logo.png"
            alt="Journeys"
            className="brand-logo"
            loading="eager"
          />
        </div>

        <div className="hairline-rule" aria-hidden="true" />

        {/* Editorial Messages */}
        <div className="editorial-copy">
          <h1 className="main-headline">
            we are curating your trip.
          </h1>

          <p className="back-soon-text">
            will be back soon.
          </p>
        </div>

        {/* Contact Experience */}
        <div className="contact-atelier">
          <p className="contact-preface">please reach us on</p>

          <a
            href={`tel:${rawNumber}`}
            className="phone-display"
            title="Call +91 98470 30110"
          >
            +91 98470 30110
          </a>

          <div className="contact-buttons-group">
            <a
              href={`tel:${rawNumber}`}
              className="atelier-btn"
              aria-label="Call +91 98470 30110"
            >
              Call
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="atelier-btn"
              aria-label="Chat on WhatsApp"
            >
              WhatsApp
            </a>
          </div>

          <div className="copy-toast" aria-live="polite">
            {copied && <span>Number copied to clipboard</span>}
          </div>
        </div>
      </main>

      {/* Quiet Minimal Footer */}
      <footer className="atelier-footer">
        <span>&copy; {CURRENT_YEAR} Journeys</span>
      </footer>
    </div>
  )
}
