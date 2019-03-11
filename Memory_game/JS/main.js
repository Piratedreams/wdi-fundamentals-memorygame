console.log("up and running!");


var cards = [
{
suit: "Diamonds",
rank: "King",
cardImage: "images/king-of-diamonds.png",
},
{
suit: "Diamonds",
rank: "Queen",
cardImage: "images/Queen-of-diamonds.png",
},
{
suit: "Hearts",
rank: "King",
cardImage: "images/King-of-hearts.png",
},
{
suit: "Hearts",
rank: "Queen",
cardImage: "images/Queen-of-hearts.png",
},
];
var cardsInPlay = [];
var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("sorry try again");
}
};
var flipCard = function() {
  checkForMatch();
  if (cardsInPlay[0] === [1] ) {
    alert("You found a match!")
  }  else {
      alert("Sorry, Try again.");
  }
  console.log("User flipped " + cards[cardId.rank]);
  cardsInPlay.push(cards[cardId.rank]);
  console.log("User flipped " + cards[cardId.suit]);
  console.log("User flipped " + cards[cardId.cardImage]);
};
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
          // Logic here
  }
};
var newListItem = document.createElement('img');

var cardElement = document.createElement(i); {
  cardElement.setAttribute('backOfCard', 'images/back.png');
  cardElement.setAttribute('dataId', i);
  cardElement.addEventListener('click', flipCard)
  cardElement.appendChild(game-board);
};

createBoard();
