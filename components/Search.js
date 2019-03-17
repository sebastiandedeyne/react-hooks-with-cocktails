export default function Search({ value, onChange }) {
  return (
    <div className="flex text-lg items-center mt-12 pb-4">
      <span className="mr-4">Find</span>
      <input
        type="search"
        className="flex-1 py-1 italic mt-2px border-b border-paper focus:outline-none"
        value={value}
        onChange={e => onChange(e.target.value)}
        autoFocus
      />
      <span className="ml-4">recipes</span>
    </div>
  );
}
