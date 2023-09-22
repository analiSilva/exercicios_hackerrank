let array = [1,2,3,4,10,11]
let sum = 0

function simpleArraySum(array, sum) {
    for (var i = 0; i < array.length; i++) {
        sum+=array[i]
    }
    return sum
}

console.log(simpleArraySum(array, sum))