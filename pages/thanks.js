import Slide from "../components/Slide";

export default function() {
  return (
    <Slide title="There's always more to learn!">
      <p>More hooks!</p>
      <p className="text-sm mb-6 text-gray-600">
        useContext / useReducer / useCallback / useMemo / useRef /
        useImperativeHandle / useLayoutEffect / useDebugValue
      </p>
      <p className="mb-6">
        <a
          href="https://reactjs.org/docs/hooks-intro.html"
          target="_blank"
          className="text-blue-500"
        >
          reactjs.org/docs/hooks-intro.html
        </a>
        <br />
        <a
          href="https://overreacted.io"
          target="_blank"
          className="text-blue-500"
        >
          overreacted.io
        </a>
      </p>
      <p>@sebdedeyne</p>
      <p>sebastiandedeyne.com</p>
    </Slide>
  );
}
