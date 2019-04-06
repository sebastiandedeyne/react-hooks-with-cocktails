export default function CocktailsPage({ children }) {
  return (
    <>
      <div
        className="font-serif max-w-lg mx-auto bg-white px-12"
        style={{ minHeight: "calc(100vh - 2rem)" }}
      >
        <div className="text-paper">
          <img src="/static/thingamajig.svg" />
        </div>
        <h1 className="font-cocktail font-black text-brown uppercase tracking-widest text-center text-2xl -mt-6">
          Hooks & Cocktails
        </h1>
        {children}
      </div>
    </>
  );
}
