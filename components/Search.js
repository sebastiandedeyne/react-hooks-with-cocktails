export default function Search({ value, onChange = () => {} }) {
  return (
    <div className="flex text-lg items-center mt-12 pb-4">
      <span className="mr-4">Find</span>
      <input
        type="search"
        className="input flex-1 mt-2px"
        value={value}
        onChange={e => onChange(e.target.value)}
        autoFocus
      />
      <span className="ml-4">recipes</span>
    </div>
  );
}
