import Tags from './Tags.jsx'

export default function Skills({ groups }) {
  return (
    <div className="cols">
      {groups.map((group) => (
        <div className="box" key={group.title}>
          <h3>{group.title}</h3>
          <Tags items={group.items} />
        </div>
      ))}
    </div>
  )
}
