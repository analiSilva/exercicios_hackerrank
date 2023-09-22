let a = [5, 6, 7]
let b = [3, 6, 10]

let pontosAlice = 0
let pontosBob = 0

function compareTriplets(a, b, pontosAlice, pontosBob) {
    for(var i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            pontosAlice+=1
        } else if (a[i] < b[i]){
            pontosBob+=1
        }
        
    }
    return [pontosAlice, pontosBob]
}

console.log(compareTriplets(a, b, pontosAlice, pontosBob))