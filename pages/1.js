import Slide from "../components/Slide";

export default function() {
  return (
    <Slide title="Hello! 🍸" next="/2">
      <p className="mb-6">I'm Sebastian De Deyne.</p>
      <p className="mb-6">
        Front end developer and designer <br /> at Spatie.
      </p>
      <p className="mb-6">
        We're going to talk about{" "}
        <a href="https://reactjs.org" target="_blank" className="text-blue-500">
          React
        </a>
        .
      </p>
      <p>
        React fundamentals <br />
        How to use basic React hooks <br />
        How to use compose custom hooks <br />
        <span className="text-gray-500 line-through">Hooks internals</span>{" "}
        <br />
        <span className="text-gray-500 line-through">Advanced hooks</span>{" "}
        <br />
      </p>
    </Slide>
  );
}
