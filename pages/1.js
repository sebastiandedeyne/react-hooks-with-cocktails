import Slide from "../components/Slide";

export default function() {
  return (
    <Slide title="Hello! 🍸" next="/2">
      <p className="mb-6">I'm Sebastian De Deyne.</p>
      <p className="mb-6">Front end developer and designer at Spatie.</p>
      <p className="mb-6">
        We're going to talk about{" "}
        <a href="https://reactjs.org" target="_blank" className="text-blue-500">
          React
        </a>
        .
      </p>
      <ul className="list-disc list-inside">
        <li>React fundamentals </li>
        <li>How to use basic React hooks </li>
        <li>How to use compose custom hooks </li>
        <li>
          <span className="text-gray-500 line-through">Hooks internals</span>
        </li>
        <li>
          <span className="text-gray-500 line-through">Advanced hooks</span>
        </li>
      </ul>
    </Slide>
  );
}
