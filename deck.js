class Card {
    constructor(string, suit, num) {
        this._string = string;
        this._num = num;
        this._suit = suit;
    }
    showCard() {
        console.log(`Suit is ${this._suit}, String value is ${this._string}, Numerical value is ${this._num}`)
    }
}

class Deck extends Card {
    constructor() {
        super();
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const sVal = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

        for (let j = 0; j < suits.length; j++) {
            for (let i = 0; i < sVal.length; i++) {
                this.deck.push(new Card(sVal[i], suits[j], i + 1));
            }
        }
    
    }
    shuffle() {
        const { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }
    reset(){
        this.deck = [];
    }
    deal(){
        return this.deck.pop();
    }

}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
        for(let i = 0; i < 7; i++){
            this.hand.push(newDeck.deal());
        }
    }
    takeCard(){
        this.hand.push(newDeck.deal());
    }
    discard(){
        this.hand.pop();
    }

}


const newDeck = new Deck();
console.log(newDeck);
newDeck.shuffle();
console.log("**************************************");
console.log(newDeck);
console.log("**************************************");
console.log(newDeck.deal());
const rick = new Player("Jahhhh");
console.log(rick.hand);
rick.takeCard();
console.log(rick.hand);
rick.discard();
rick.discard();
rick.discard();
rick.discard();
console.log(rick.hand);