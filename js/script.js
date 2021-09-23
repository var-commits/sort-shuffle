let cardsList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  cardsContainer = document.getElementById("cards-container");

cardsList.forEach((item, index) => {
  cardsContainer.innerHTML += "<li data-item=" + item + ">" + item + "</li>";
});

/**
 * @description this method will shuffle the items randomly
 * @public
 */
shuffleCards = () => {
  let i = 0;
  cardsList = cardsList.sort(() => {
    return 0.5 - Math.random();
  });
  cardsContainer.innerHTML = "";
  while (i < cardsList.length) {
    let card = document.createElement("li");
    card.innerHTML = cardsList[i];
    card.setAttribute("data-item", cardsList[i]);
    cardsContainer.appendChild(card);
    ++i;
  }
};

/**
 * @description this method will sort the items in asc order and append the sorted cards to the container
 * @public
 */
sortCards = () => {
  let i = 0;
  cardsList = cardsList.sort((a, b) => {
    return a - b;
  });
  cardsContainer.innerHTML = "";
  while (i < cardsList.length) {
    let card = document.createElement("li");
    card.innerHTML = cardsList[i];
    card.setAttribute("data-item", cardsList[i]);
    cardsContainer.appendChild(card);
    ++i;
  }
};
