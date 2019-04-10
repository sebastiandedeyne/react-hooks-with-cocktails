import Slide from "../components/Slide";

export default function() {
  return (
    <Slide title="f(Props) => Node[]" next="/">
      <p className="mb-2">
        React transforms props to a tree of nodes. ReactDOM renders those nodes
        in the browser.
      </p>
      <p className="mb-12">Declarative means predictable.</p>
      <TextInput name="name" label="Name" value="" />
      <p className="mt-8">Hello, ... !</p>
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
