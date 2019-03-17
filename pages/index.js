import { useEffect, useState } from "react";
import { Cocktail, Layout, Search } from "../components";

export default function Index() {
  const [search, setSearch] = useState("margarita");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    if (search === "") {
      setCocktails([]);

      return;
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(res => setCocktails(res.drinks || []));
  }, [search]);

  return (
    <Layout>
      <Search value={search} onChange={setSearch} />
      {cocktails.map(cocktail => (
        <Cocktail key={cocktail.idDrink} {...cocktail} />
      ))}
      {search.length && !cocktails.length ? (
        <p className="italic">No results</p>
      ) : null}
    </Layout>
  );
}
