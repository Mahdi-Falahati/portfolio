import { profile } from '../data/content.js'

export default function Contact({ content }) {
  return (
    <>
      <p className="lead">{content.contactLead}</p>
      <ul>
        <li>
          <a className="big" href={`mailto:${profile.email}`}>{content.emailLabel}: {' '}
            {profile.email}
          </a>
        </li>
        <li>
          <a className="big" href={`tel:${profile.phone}`}>{content.phoneLabel}: {' '}
            {profile.phoneLabel}
          </a>
        </li>
      </ul>
    </>
  )
}
