import Slide from "../components/Slide";

export default function() {
  return (
    <Slide title="f(Props) => Node[]" next="/">
      <p className="mb-2">React transforms props to a tree of nodes.</p>
      <p className="text-sm mb-12">
        (ReactDOM renders a node tree in the browser)
      </p>
      <TextInput name="name" label="Name" value="" />
    </Slide>
  );
}

function TextInput({ label, name, value }) {
  return (
    <div className="flex items-center">
      <label htmlFor={name} className="mr-2">
        {label}:
      </label>
      <input
        type="text"
        id={name}
        value={value}
        className="flex-1 border-2 border-gray-500 focus:outline-none px-2 py-1"
        autoComplete="off"
      />
    </div>
  );
}
