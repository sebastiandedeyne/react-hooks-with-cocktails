import cocktails from "../data/cocktails";

import { CocktailsPage, Cocktail, Search } from "../components";

export default function Index() {
  const search = "margherita";

  return (
    <CocktailsPage>
      <Search value={search} />
      {cocktails.map(cocktail => (
        <Cocktail key={cocktail.idDrink} {...cocktail} />
      ))}
      {search.length && !cocktails.length ? (
        <p className="italic">No results</p>
      ) : null}
    </CocktailsPage>
  );
}
