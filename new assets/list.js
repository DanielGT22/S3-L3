function setHalfVolume() {
  var myAudio = document.getElementById("audio1");
  myAudio.volume = 0.5; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}

const pokeForm = document.getElementById("all-pokemon");

pokeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const pokeNameInputField = document.getElementById("pokeName");
  const pokeDexInputField = document.getElementById("pokeDex");
  const pokeGenInputField = document.getElementById("pokeGen");
  const guessed = {
    pokeName: pokeNameInputField.value,
    pokeDex: pokeDexInputField.value,
    pokeGen: pokeGenInputField.value,
  };
  console.log("Guessed Mon", guessed);
  //
  //
  const guessedCard = document.createElement("div");
  guessedCard.classList.add("poke-card");

  guessedCard.innerHTML = `
    <p>${guessed.pokeName}</p>
    <p>${guessed.pokeDex}</p>
    <p>${guessed.pokeGen}</p>
    <button onclick="checked(event)">CHECKED!</button>
    <button onclick="deleteCard(event)">DELETE?</button>

    `;

  const cardSection = document.getElementById("guessedMon");
  cardSection.appendChild(guessedCard);
});
const checked = function (e) {
  const tag1 = e.target.parentElement;
  tag1.style.textDecoration = "line-through";
};
const deleteCard = function (e) {
  const clickedButton = e.target;
  console.log(clickedButton.parentElement);
  const reallyRemove = confirm("Vuoi davvero eliminare?");
  if (reallyRemove) {
    clickedButton.parentElement.remove();
  }
};
