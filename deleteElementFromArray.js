let elementsArr = ["Hii", 2, 56, "Nishant", "dummy", 980];


/*
   - The pop() method removes the last item of an array.
   - The pop() method changes the original array.
   - The pop() method returns the popped element.
*/
function deleteElementFromLast(elements) {

    //Method -1
    elementsArr.pop()

    //Method -2
    elementsArr.length -= 1

    //Both above method will Remove element from the last index of array. Result will be --> elementsArr= ["Hii", 2, 56, "Nishant", "dummy"];

}


/*
   - The shift() method removes the first item of an array.
   - The shift() method changes the original array.
   - The shift() method returns the shifted element.
*/
function deleteElementFromStart(elements) {


    elements.shift()
    // Will Remove element from the last index of array. Result will be --> elementsArr= [2, 56, "Nishant", "dummy",980]

}


function deleteParticularElementFromArray(elements, element_to_remove) {

    elements = elements.filter((item) => item !== element_to_remove)
    // Will Remove particular element of array. Result will be --> elementsArr= [2, 56, "Nishant", "dummy",980]
    return elements
}


/**
 * The splice() method removes the items of an array starting at index position and remove count number of elements .
 * The splice() method changes the original array.
 * The splice() method returns the removed element.
 */
function deleteElementsFromParticularIndex(elements, index, count) {
    let removedElements = elements.splice(index, count);
    //elements will contain elements after removal and removedElements will contain the removed elements
}

