let elementsArr = ["Hii", 2, 56, "Nishant", "dummy", 980];

function pickRandomElementFromArray(elements) {
    let item = elements[Math.floor(Math.random() * elements.length)];
    return item
}

console.log(`Original Array ----->  [${elementsArr}] \nRandom picked element -----> ${pickRandomElementFromArray(elementsArr)}`)