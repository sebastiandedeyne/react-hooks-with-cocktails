export default function Cocktail(props) {
  const ingredients = Array.from({ length: 15 })
    .map((_, i) =>
      `${props[`strMeasure${i + 1}`] || ""} ${props[`strIngredient${i + 1}`] ||
        ""}`.trim()
    )
    .filter(Boolean);

  return (
    <article className="cocktail py-8">
      <h2 className="font-cocktail font-bold text-brown uppercase tracking-widest mb-2">
        {props.strDrink}
      </h2>
      <ul className="mb-2">
        {ingredients.map((ingredient, i) => (
          <li key={i}>
            <span className="inline-block opacity-75 mr-3">⚘</span>
            {ingredient}
          </li>
        ))}
      </ul>
      <p className="italic">{props.strInstructions}</p>
    </article>
  );
}
