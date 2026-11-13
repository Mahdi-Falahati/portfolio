import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content.js'

const help = [
  ['help', 'show this command list'],
  ['ls /skills', 'jump to skills'],
  ['ls /about', 'jump to about'],
  ['ls /work', 'jump to experience'],
  ['ls /contact', 'jump to contact'],
  ['coffee', 'refill the developer fuel tank'],
  ['sudo hire-me', 'try your luck (nicely)'],
  ['clear', 'clear command history'],
  ['joke', 'request a developer-grade joke'],
  ['dance', 'make the terminal dance'],
  ['hack nasa', 'attempt a very questionable career move']
]

const sections = {
  about: 'about',
  skills: 'skills',
  work: 'work',
  experience: 'work',
  contact: 'contact',
  education: 'education',
  learning: 'learning',
  life: 'life'
}

const fortunes = [
  'Fortune: the bug is always in the one line you just changed.',
  'Fortune: good things happen after you read the error message.',
  'Fortune: have you tried turning it off and on again?'
]

function runCommand(rawCommand) {
  const command = rawCommand.trim().replace(/\s+/g, ' ')
  const normalized = command.toLowerCase()

  if (!command) return ''
  if (normalized === 'help') return help.map(([name, description]) => `${name.padEnd(18)} ${description}`).join('\n')
  if (normalized === 'clear') return '__clear__'
  if (normalized === 'coffee') return '☕ Coffee.exe started. Warning: may cause unexpected productivity.'
  if (normalized === 'sudo hire-me') return 'Permission granted. Just kidding — send me a message and let’s talk! :)'
  if (normalized === 'fortune') return fortunes[Math.floor(Math.random() * fortunes.length)]
  if (normalized === 'matrix') return 'Wake up, developer... The portfolio has you. 🟢'
  if (normalized === 'joke') return 'Why do programmers prefer dark mode? Because light attracts bugs. 🐛'
  if (normalized === 'dance') return '🪩 Terminal dance party! No bugs were harmed (they are still in the backlog).'
  if (normalized === 'hack nasa') return '🚨 Access denied: this terminal can barely find its own coffee. Try "coffee" instead.'
  if (normalized === 'ls /') return 'about/  skills/  work/  education/  learning/  contact/'

  const match = normalized.match(/^(?:ls|cd|open)\s+\/?([a-z-]+)\/?$/)
  if (match && sections[match[1]]) {
    const section = sections[match[1]]
    window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return `Opening /${match[1]} ... scrolling into view.`
  }

  return `Command not found: ${command}. Type "help" to see what you can do.`
}

export default function Terminal({ language }) {
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState([])
  const [isDancing, setIsDancing] = useState(false)
  const [showBackToTerminal, setShowBackToTerminal] = useState(false)
  const terminalRef = useRef(null)

  useEffect(() => {
    const terminal = terminalRef.current
    if (!terminal) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      setShowBackToTerminal(!entry.isIntersecting)
    })
    observer.observe(terminal)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isDancing) return undefined
    const timeout = window.setTimeout(() => setIsDancing(false), 1200)
    return () => window.clearTimeout(timeout)
  }, [isDancing])

  function handleSubmit(event) {
    event.preventDefault()
    const entered = command.trim()
    if (!entered) return

    const output = runCommand(entered)
    if (output === '__clear__') {
      setHistory([])
    } else {
      setHistory((previous) => [...previous, { command: entered, output }])
    }
    if (entered.toLowerCase() === 'dance') setIsDancing(true)
    setCommand('')
  }

  return (
    <>
    <div ref={terminalRef} id="terminal" className={`term${isDancing ? ' term--dancing' : ''}`} role="region" aria-label="Interactive portfolio terminal">
      <div className="term-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <b>mahdi@portfolio</b>
      </div>
      <div className="term-body">
        <div className="out">
          <h1>{profile.name}</h1>
        </div>
        <div className="cmd">
          <span className="prompt">$</span> cat role.txt
        </div>
        <div className="out">{profile.role}</div>

        <div className="terminal-history" aria-live="polite">
          {history.map((entry, index) => (
            <div className="terminal-entry" key={`${entry.command}-${index}`}>
              <div className="cmd"><span className="prompt">$</span> {entry.command}</div>
              {entry.output && <pre className="out terminal-output">{entry.output}</pre>}
            </div>
          ))}
        </div>

        <form className="terminal-form" onSubmit={handleSubmit}>
          <label className="prompt" htmlFor="terminal-command">$</label>
          <input
            id="terminal-command"
            aria-label="Enter a terminal command"
            autoComplete="off"
            spellCheck="false"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder="type help and press Enter"
          />
          <button type="submit">Run</button>
        </form>

        <details className="terminal-help">
          <summary>Quick help <span className="dim">— click to see available commands</span></summary>
          <div className="terminal-help-commands">
            {help.map(([name, description]) => (
              <div className="terminal-help-row" key={name}>
                <code>{name}</code>
                <span>{description}</span>
              </div>
            ))}
            <div className="dim terminal-extra">Bonus: try <code>fortune</code> or <code>matrix</code></div>
          </div>
        </details>
      </div>
    </div>
    {showBackToTerminal && (
      <button
        className="back-to-terminal"
        type="button"
        lang={language}
        dir={language === 'en' ? 'ltr' : 'rtl'}
        onClick={() => terminalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      >
        ↑ <span>{language === 'fa' ? 'بازگشت به ترمینال' : language === 'ar' ? 'العودة إلى الطرفية' : 'Back to terminal'}</span>
      </button>
    )}
    </>
  )
}
