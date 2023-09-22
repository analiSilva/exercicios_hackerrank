let candles = [3, 2, 1, 3]

function birthdayCakeCandles(candles) {
    let maior = Math.max(...candles)
    let qtdVelasMaiores = 0
    for(var i = 0; i < candles.length; i++){
        if(candles[i] == maior){
            qtdVelasMaiores += 1
        }
    }
    return qtdVelasMaiores
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))