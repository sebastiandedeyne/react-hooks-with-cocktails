import Slide from "../components/Slide";

// {
//   const button = document.createElement("button");

//   button.className = "button";
//   button.text = "Click me!";

//   button.addEventListener("click", () => {
//     // doSomething();
//   });
// }

// {
//   <button
//     className="button"
//     onClick={() => {
//       /* doSomething() */
//     }}
//   >
//     Click me!
//   </button>;
// }

export default function() {
  return (
    <Slide title="Declarative" next="/3">
      <p>“What” instead of “How”</p>
    </Slide>
  );
}
