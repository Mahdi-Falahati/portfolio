import { useState } from 'react'
import { nav, profile } from '../data/content.js'
import { GB, IR, SA } from 'country-flag-icons/react/3x2'

const languages = ['en', 'fa', 'ar']
const languageNames = { en: 'English', fa: 'فارسی', ar: 'العربية' }
const languageFlags = { en: GB, fa: IR, ar: SA }

export default function Header({ language, setLanguage, content }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <header className="top">
      <div className={`quick-contact${contactOpen ? ' quick-contact--open' : ''}`}>
        <button
          className="quick-contact-toggle"
          type="button"
          aria-expanded={contactOpen}
          aria-controls="quick-contact-content"
          onClick={() => setContactOpen((open) => !open)}
        >
          {content.quickContactLead}
          <span className="quick-contact-chevron" aria-hidden="true" />
        </button>
        <div className="quick-contact-content" id="quick-contact-content">
          <span className="quick-contact-lead">{content.quickContactLead}</span>
          <a href={`mailto:${profile.email}?subject=Project%20inquiry`}>{content.emailLabel}: {profile.email}</a>
          <a href={`tel:${profile.phone}`}>{content.phoneLabel}: {profile.phoneLabel}</a>
          <span className="quick-contact-prompt">{content.quickContactAction} <span aria-hidden="true">↗</span></span>
        </div>
      </div>
      <div className="top-main">
        <a className="logo" href="#top">
          {profile.logo}
          <span>.</span>dev
        </a>
        <button
          className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
          type="button"
          aria-label={menuOpen ? content.closeMenuLabel : content.openMenuLabel}
          aria-expanded={menuOpen}
          aria-controls="header-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`top-menu${menuOpen ? ' top-menu--open' : ''}`} id="header-menu">
          <nav aria-label={content.navLabel}>
            {nav.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {content.nav[link.href.slice(1)]}
              </a>
            ))}
          </nav>
          <div className="language-switch" role="group" aria-label={content.languagesLabel}>
            {languages.map((code) => {
              const Flag = languageFlags[code]
              return (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  aria-label={languageNames[code]}
                  title={languageNames[code]}
                  aria-pressed={language === code}
                  onClick={() => {
                    setLanguage(code)
                    setMenuOpen(false)
                  }}
                >
                  <Flag aria-hidden="true" focusable="false" />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}