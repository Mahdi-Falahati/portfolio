export default function Method({ items }) {
  return (
    <div className="cols">
      {items.map((item) => (
        <div className="box" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  )
}
