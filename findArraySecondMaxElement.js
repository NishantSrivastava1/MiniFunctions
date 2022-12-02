/**
 * Input Array is - [12, 35, 35, 1, 10, 34, 35, 1]
 * Output - 34
 * 

 */
let arr = [12, 35, 35, 1, 10, 34, 35, 1] 

arr = [...new Set(arr)] // Making array unique removing repeated elements , output -> [ 12, 35, 1, 10, 34 ]

let max = Number.MIN_SAFE_INTEGER, secondMax = Number.MIN_SAFE_INTEGER

for (let i = 0; i < arr.length; i++) {



    if (arr[i] > max) {

        secondMax = max

        max = arr[i]

    }

    else if (arr[i] > secondMax)

        secondMax = arr[i]

}



console.log("result", secondMax)