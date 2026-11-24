export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" role="list">
      {items.map((item) => (
        <li className="tag" key={item}>{item}</li>
      ))}
    </ul>
  );
}
