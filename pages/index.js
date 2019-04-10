import cocktails from "../data/cocktails";

import { CocktailsPage, Cocktail, Search } from "../components";

export default function Index() {
  const search = "margherita";

  // Make `search` stateful

  // Update the page title with the search string

  // Use thecockataildb.com to search
  // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

  // Extract to a custom hook

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
