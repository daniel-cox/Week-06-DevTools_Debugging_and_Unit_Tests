//TODO create classes such as Card, Deck & Player
//NOTE - this creates a class called card, that passes two arguments
class Card {
  constructor(cardValue, cardSuit) {
    this.cardValue = cardValue;
    this.cardSuit = cardSuit;
  }
}

class Deck {
  constructor() {
    this.cardDeck = [];
    this.cardRank = [
      "ace",
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      "jack",
      "queen",
      "king",
    ];
    this.cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.cardSuit = ["hearts", "diamonds", "spades", "clubs"];
  }
  // create cards
  createCards() {
    for (let cardLoop = 0; cardLoop < this.cardSuit.length; cardLoop++) {
      for (let i = 0; i < this.cardValue.length; i++) {
        //   console.log("Logging index:", i);
        this.cardDeck.push({
          card: `${this.cardRank[i]} of ${this.cardSuit[cardLoop]}`,
          cardValue: this.cardValue[i],
        });
      }
    }
    return this.cardDeck;
  }
  // shuffle cards
  shuffleCards() {
    //console.log("testing card shuffle");
    for (let i = 0; i < this.cardDeck.length; i++) {
      let cardIndex = Math.floor(Math.random() * (i + 1));
      let temp = this.cardDeck[i];
      this.cardDeck[i] = this.cardDeck[cardIndex];
      this.cardDeck[cardIndex] = temp;
      //console.log("testing shuffling of cards", this.cardDeck);
    }
  }
  // deal cards
  dealCards(playerParam1, playerParam2) {
    // console.log(
    //   "We are dealing your cards to:",
    //   playerParam1,
    //   playerParam2.playerName
    // );
    let deck = this.cardDeck;
    let p1Deck = deck.slice(0, 26);
    let p2Deck = deck.slice(26, 52);
    // console.log("slicing card deck", p1Deck);
    // console.log("slicing card deck", p2Deck);

    playerParam1.playerHand = p1Deck;
    playerParam2.playerHand = p2Deck;
    console.log(playerParam1.playerHand, playerParam2.playerHand);
  }
}
//TODO Create a player
class Player {
  constructor(nameValue) {
    this.playerName = nameValue;
    this.playerHand = [];
    this.playerScore = 0;
  }
}
//TODO deal 26 Cards to 2 Players from the card deck
class cardGame {
  constructor() {}
  playWarGame() {
    //NOTE - creates a deck of cards
    let deckOfCards = new Deck();
    deckOfCards.createCards();
    //console.log(deckOfCards);
    deckOfCards.shuffleCards();
    //NOTE - creates 2 players
    let Player1 = new Player(prompt("Enter player 1 name"));
    let Player2 = new Player("CPU");

    deckOfCards.dealCards(Player1, Player2);
    //TODO iterate through the turns where each Player plays a Card
    let rounds = 26;
    for (let i = 0; i < rounds; i++) {
      //Player 1 hand is greater
      if (Player1.playerHand[i].cardValue > Player2.playerHand[i].cardValue) {
        Player1.playerScore += 1;

        console.log(`

        ${Player1.playerName} has a: ${Player1.playerHand[i].card}
        ${Player1.playerName} has a: ${Player1.playerScore} points
        ${Player2.playerName} has a: ${Player2.playerHand[i].card}
        ${Player1.playerName} wins the round ${i}
        `);
      }
      //Player 2 hand is greater
      else if (
        Player1.playerHand[i].cardValue < Player2.playerHand[i].cardValue
      ) {
        Player2.playerScore += 1;

        console.log(`

        ${Player1.playerName} has a: ${Player1.playerHand[i].card}
        ${Player1.playerName} has a: ${Player1.playerScore} points
        ${Player2.playerName} has a: ${Player2.playerHand[i].card}
        ${Player2.playerName} wins the round ${i}
        `);

        //console.log("logging hand", Player1.playerHand[i]);
      }
      //If P1 and P2 are equal
      else {
        console.log(`

        ${Player1.playerName} has a: ${Player1.playerHand[i].card}
        ${Player1.playerName} has a: ${Player1.playerScore} points
        ${Player2.playerName} has a: ${Player2.playerHand[i].card}
        Round ${i} ends in a draw
        `);

        //If P1 and P2 are equal
      }
    }
    //TODO award a point to the Player with the higher Card

    //TODO ties result in zero points for both Players

    //TODO after all cards have been plaasdsdaayed, display the score and declare the winner.
    if (Player1.playerScore > Player2.playerScore) {
      console.log(`${Player1.playerName} wins the game`);
    } else if (Player1.playerScore < Player2.playerScore) {
      console.log(`${Player2.playerName} wins the game`);
    } else {
      console.log("The game ends in a draw");
    }
    //TODO write a Unit Test using Mocha and Chai for at least one of your functions
  }
}
let warGame = new cardGame();
warGame.playWarGame();
