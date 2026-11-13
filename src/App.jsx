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
    <div className="app-container">
      <div className="bg-overlay" aria-hidden="true" />

      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-badge">
          <span className="top-badge-dot" />
          <span>Curating Itineraries</span>
        </div>
        <div className="top-location">
          <span>Kerala, India</span>
        </div>
      </header>

      {/* Centerpiece Stage without white card */}
      <main className="main-stage">
        <div className="content-wrapper">
          {/* Client Logo */}
          <div className="logo-container">
            <img
              src="/logo.png"
              alt="Journeys"
              className="brand-logo"
              loading="eager"
            />
          </div>

          <div className="divider" aria-hidden="true" />

          {/* Core Messages */}
          <div className="text-group">
            <h1 className="heading">
              we are curating your trip.
            </h1>

            <div className="subtitle-wrapper">
              <p className="subtitle">
                will be back soon.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <p className="contact-label">please reach us on</p>

            <div className="phone-link-wrapper">
              <a
                href={`tel:${rawNumber}`}
                className="phone-number"
                title="Call +91 98470 30110"
              >
                +91 98470 30110
              </a>
            </div>

            <div className="actions-row">
              <a
                href={`tel:${rawNumber}`}
                className="action-btn"
                aria-label="Call +91 98470 30110"
              >
                Call
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="action-btn"
                aria-label="Copy phone number"
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="copy-feedback" aria-live="polite">
              {copied && <span>Phone number copied to clipboard</span>}
            </div>
          </div>
        </div>
      </main>

      {/* Subtle Bottom Bar */}
      <footer className="footer-bar">
        <span className="footer-left">
          &copy; {CURRENT_YEAR} Journeys. All rights reserved.
        </span>
        <span className="footer-right">
          Bespoke Kerala Travel Atelier
        </span>
      </footer>
    </div>
  )
}
