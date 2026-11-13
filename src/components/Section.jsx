export default function Section({ id, title, first = false, className = '', children }) {
  const classes = ['section', first ? 'section--first' : '', className].filter(Boolean).join(' ')
  return (
    <section id={id} className={classes}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
