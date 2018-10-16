//This should find the minimum card in a deck of cards
var deck = []
function generateDeck(length, max) {
    var i = 0
    while (i !== length) {
        deck.push(Math.floor(Math.random()*max)+1)
        i++
        //console.log("i is " + i + "the deck is " + deck)
    }
}
function findMin(array) {
    let lhPos = 0
    let rhPos = 1
    let lhCard = array[lhPos]
    let rhCard = array[rhPos]
    //return console.log(lhPos, rhPos, lhCard, rhCard)
    //return rhPos
    while (rhPos < array.length) {
        if (lhCard === rhCard || lhCard > rhCard) {
        lhPos=rhPos
        rhPos++
        //console.log("1st if lhpos " + lhPos + "rhPos " + rhPos + "lhCard " + lhCard + "rhCard " + rhCard)
        lhCard = array[lhPos]
        rhCard = array[rhPos]

    }
        else if (lhCard < rhCard) {
        rhPos++
        //console.log("shifting rh right")
        //console.log("2nd if lhpos " + lhPos + "rhPos " + rhPos + "lhCard " + lhCard + "rhCard " + rhCard)
        lhCard = array[lhPos]
        rhCard = array[rhPos]
    }
  }
    return lhCard
    //console.log("return lhpos " + lhPos + "rhPos " + rhPos + "lhCard " + lhCard + "rhCard " + rhCard)
}
generateDeck(8, 13)
console.log(deck)
console.log(findMin(deck))
