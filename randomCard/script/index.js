const suits = [['heart','red'], ['spade','black'], ['club','black'], ['diamond','red']];
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

window.onload = function() {
    //this.console.log();
    let aSuit = this.getRandomElement(suits);
    let aCard = this.getRandomElement(cards);
    aSuitColor = aSuit[1];
    this.document.querySelector(".topleft").className ="topleft "+aSuit[0];
    //this.document.querySelector(".topleft").innerHTML = aCard;
    this.document.querySelector(".cardLabel").style.color =  aSuitColor;
    this.document.querySelector(".cardLabel").innerHTML = aCard;
    this.document.querySelector(".bottomright").className ="bottomright "+aSuit[0];
    //this.document.querySelector(".bottomright").innerHTML = aCard;
}

function getRandomElement(anArray){
    return anArray[Math.floor(Math.random()*anArray.length)]
}
