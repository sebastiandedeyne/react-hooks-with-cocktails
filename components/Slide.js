import Link from "next/link";

export default function Slide({ title, children, next }) {
  function openNextInVSCode() {
    window.location.href = `vscode://file//Users/sebastiandedeyne/Sites/react-hooks-with-cocktails/pages${
      next === "/" ? "/index" : next
    }.js`;
  }

  return (
    <div className="slide p-6 bg-white font-slide text-2xl">
      <h1 className="font-bold text-4xl mb-8 text-red-500">{title}</h1>
      <div className="text-gray-700">{children}</div>
      <div className="fixed bottom-0 right-0 px-4 pb-3 pt-2 bg-white mt-16 font-bold text-right text-2xl text-gray-400">
        <Link href={next}>
          <a onClick={openNextInVSCode}>Next</a>
        </Link>
      </div>
    </div>
  );
}
