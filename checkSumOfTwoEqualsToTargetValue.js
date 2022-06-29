const numbers = [2, 7, 1, 11, 15];
const target = 9;

function returnIndexesWhoseSumEqualsToTarget(nums, target) {

    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let substraction = target - nums[i]

        if (map.has(substraction))
            return [map.get(substraction), i]
        else
            map.set(nums[i], i)
    }

    return "Not found"

}

console.log("Result", returnIndexesWhoseSumEqualsToTarget(numbers, target));