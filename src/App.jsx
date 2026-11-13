import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Terminal from './components/Terminal.jsx'
import Section from './components/Section.jsx'
import Skills from './components/Skills.jsx'
import Timeline from './components/Timeline.jsx'
import SelectedWork from './components/SelectedWork.jsx'
import Method from './components/Method.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { profile } from './data/content.js'
import { translations } from './data/translations.js'

export default function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    return translations[savedLanguage] ? savedLanguage : 'en'
  })
  const content = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = content.direction
    window.localStorage.setItem('portfolio-language', language)
  }, [content.direction, language])

  return (
    <div className="wrap" dir={content.direction}>
      <Header language={language} setLanguage={setLanguage} content={content} />
      <main id="top">
        <Terminal language={language} />
        <Section id="about" title={content.sections.about} first>
          <p className="lead">{content.about}</p>
        </Section>
        <Section id="skills" title={content.sections.skills}>
          <Skills groups={content.skills} />
        </Section>
        <Section id="work" title={content.sections.work}>
          <Timeline items={content.experience} />
        </Section>
        {/* <Section id="selected-work" title="selected work">
          <SelectedWork />
        </Section> */}
        <Section id="method" title={content.sections.method}>
          <Method items={content.method} />
        </Section>
        <Section id="education" title={content.sections.education}>
          <Timeline items={content.education} />
        </Section>
        <Section id="learning" title={content.sections.learning}>
          <div className="learning">
            <p>{content.learning}</p>
          </div>
        </Section>
        <Section id="life" title={content.sections.life}>
          <p className="lead">{content.life}</p>
        </Section>
        <Section id="contact" title={content.sections.contact} className="contact">
          <Contact content={content} />
        </Section>
      </main>
      <Footer text={content.footer} />
    </div>
  )
}
