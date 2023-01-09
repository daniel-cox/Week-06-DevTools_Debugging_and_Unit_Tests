var expect = chai.expect;

describe("#ShuffleCardDeck ", () => {
  it("Should check to see if the values of the cards are shuffled.", (done) => {
    //
    let deckOfCards = new Deck();
    deckOfCards.createCards();
    console.log(deckOfCards.cardDeck);
    expect(deckOfCards.cardDeck.length).to.eql(52);
    done();
  });
});
