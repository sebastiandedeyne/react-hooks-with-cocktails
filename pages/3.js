import Slide from "../components/Slide";

export default function() {
  return (
    <Slide title="Component-Based" next="/4">
      <div className="flex items-center">
        <label htmlFor="name" className="mr-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="flex-1 border-2 border-gray-500 focus:outline-none px-2 py-1"
          autoComplete="off"
        />
      </div>
    </Slide>
  );
}
