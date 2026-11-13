import { profile } from '../data/content.js'

export default function Footer({ text }) {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name}. {text}
    </footer>
  )
}
