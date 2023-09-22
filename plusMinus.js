let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let positivos = 0
    let negativos = 0
    let zero = 0

    for (var i = 0; i <= arr.length; i++ ){
        if(arr[i] > 0){
            positivos += 1
        } else if (arr[i] < 0) {
            negativos += 1
        } else if (arr[i] == 0) {
            zero += 1
        }
    }
        let proporcaoPositivos = positivos / arr.length
        let proporcaoNegativos = negativos / arr.length
        let proporcaoZero = zero / arr.length
        let imprimiPorporcoes = [proporcaoPositivos.toFixed(6), proporcaoNegativos.toFixed(6), proporcaoZero.toFixed(6)].join("\n")


    return imprimiPorporcoes

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))