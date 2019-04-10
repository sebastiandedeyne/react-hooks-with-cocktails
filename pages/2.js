import Slide from "../components/Slide";

// {
//   const button = document.createElement("button");

//   button.className = "button";
//   button.text = "Click me!";

//   button.addEventListener("click", () => {
//     // doSomething();
//   });
// }

export default function() {
  return (
    <Slide title="Declarative" next="/3">
      <p>“What” instead of “How”</p>
      <button
        className="button bg-gray-200 px-3 py-3 rounded mt-4"
        onClick={() => {
          alert("Hi!");
        }}
      >
        Click me!
      </button>
    </Slide>
  );
}
