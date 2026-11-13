export default function Timeline({ items }) {
  return (
    <ul className="timeline">
      {items.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          <span className="meta">{item.note}</span>
        </li>
      ))}
    </ul>
  )
}
