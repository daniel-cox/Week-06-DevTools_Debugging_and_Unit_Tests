//TODO create classes such as Card, Deck & Player
//NOTE - this creates a class called card, that passes two parameters.
class Card {
  constructor(cardValue, cardSuit) {
    this.cardValue = cardValue;
    this.cardSuit = cardSuit;
  }
}

//NOTE - Creates a Deck class that assigns 2 properties, one for the card deck, and then a card rank array, displaying each rank of each card type.
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
    //NOTE - cardValue - Assignes the cardvalue property an array of numbers representing the value of each card in the cardRank array
    //NOTE - CardSuit - assigns an array that represents the suit of each card.
  }
  // create cards

  //NOTE - This generates a deck of cards each with a rank and suit. The cardSuit & cardvalue arrays loop though each card suit and each value and stores everything in an array called cardDeck
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
    //NOTE - The below code uses the fisher-Yates shuffle algorithm, to iterate throug the array of cards in the deck. It will then randomally select a card until all cards have been sorted.
    //NOTE - cardIndex selects a random card it's then stored in the temp variable at the current element. Temp is then assigned 'cardIndex', and 'CardIndex' is assigned 'temp'. It's then repeated until all cards are shuffled.
    for (let i = 0; i < this.cardDeck.length; i++) {
      let cardIndex = Math.floor(Math.random() * (i + 1));
      let temp = this.cardDeck[i];
      this.cardDeck[i] = this.cardDeck[cardIndex];
      this.cardDeck[cardIndex] = temp;
      //console.log("testing shuffling of cards", this.cardDeck);
    }
  }
  // deal cards
  //NOTE - Creates a method that passes 2 parameters which will be used to create player 1 and player 2 card decks
  dealCards(playerParam1, playerParam2) {
    // console.log(
    //   "We are dealing your cards to:",
    //   playerParam1,
    //   playerParam2.playerName
    // );
    //NOTE - p1Deck is assigned to the player hand property of playerParam1, and the same with Player 2. The slice method is then used to give Player 1 the first 26 cards, and then Player 2 gets the remainder
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
//NOTE - This code decines a class called player, with an object that represent a player in the game, The constructor then passes properties of the object
class Player {
  constructor(nameValue) {
    this.playerName = nameValue; //holds the player 1 name
    this.playerHand = []; // set to an empty array to hold the players cards in hand
    this.playerScore = 0; // holds the players current score
  }
}
//TODO deal 26 Cards to 2 Players from the card deck

//NOTE - Below I defined a class calle card game, then a method called playWarGame which creates the deck of card,shuffles, and creates 2 players
class cardGame {
  constructor() {}
  playWarGame() {
    //NOTE - creates a deck of cards
    let deckOfCards = new Deck();
    deckOfCards.createCards();
    //console.log(deckOfCards);
    deckOfCards.shuffleCards();
    //NOTE - creates 2 players. Player 1 will have a prompt to enter a name, while Player 2 will be called CPU
    let Player1 = new Player(prompt("Enter player 1 name"));
    let Player2 = new Player("CPU");

    deckOfCards.dealCards(Player1, Player2);
    //TODO iterate through the turns where each Player plays a Card
    //TODO award a point to the Player with the higher Card
    //TODO ties result in zero points for both Players
    //TODO after all cards have been plaasdsdaayed, display the score and declare the winner.

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
        //Game ends in a draw
      } else {
        console.log(`

        ${Player1.playerName} has a: ${Player1.playerHand[i].card}
        ${Player1.playerName} has a: ${Player1.playerScore} points
        ${Player2.playerName} has a: ${Player2.playerHand[i].card}
        Round ${i} ends in a draw
        `);
      }
    }

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
