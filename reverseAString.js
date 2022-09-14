
// Method-1 : Reverse String By Built in Functions
function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log("Reverse String", reverseString("Nishant Srivastava")) // Output -> avatsavirS tnahsiN

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Method -2 : Reverse String By Recursion
function reverseByRecursion(str) {
    return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0)
}


console.log("Reverse String", reverseByRecursion("Nishant Srivastava")) // Output -> avatsavirS tnahsiN
