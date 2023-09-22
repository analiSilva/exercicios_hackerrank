let arr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
    let soma = 0
    let arraySomas =[]

    for(var j = 0; j < arr.length; j++){
        for(var i = 0; i < arr.length; i++){
            if(j == i) {
                soma += 0
            }
            if(j < i || j > i) {
                soma += arr[i]
            }    
        }
        arraySomas.push(soma)
        soma = 0
    }
    let maior = Math.max(...arraySomas)
    let menor = Math.min(...arraySomas)

    return menor +" "+ maior
}

console.log(miniMaxSum([1, 2, 3, 4, 5]))