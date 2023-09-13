const pokeForm = document.getElementById("all-pokemon");

pokeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const pokeNameInputField = document.getElementById("pokeName");
  const pokedexInputField = document.getElementById("pokedex");
  const pokeGenInputField = document.getElementById("pokeGen");
  const guessed = {
    pokeName: pokeNameInputField.Value,
    pokedex: pokedexInputField.value,
    pokeGen: pokeGenInputField.value,
  };
  console.log("Guessed Mon", guessed);
  //
  //
  const guessedCard = document.createElement("div");
  guessedCard.classList.add("poke-card");

  guessedCard.innerHTML = `
    <p>${guessed.pokeName}</p>
    <p>${guessed.pokedex}</p>
    <p>${guessed.pokeGen}</p>
    <button onclick="deleteCard(event)">ELIMINA</button>
    `;
});

const deleteCard = function (e) {
  const clickedButton = e.target;
  console.log(clickedButton.parentElement);
  const reallyRemove = confirm("Vuoi davvero eliminare?");
  if (reallyRemove) {
    clickedButton.parentElement.remove();
  }
};
