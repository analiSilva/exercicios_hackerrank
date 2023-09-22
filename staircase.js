let n = 6

function staircase(n) {
    let linhaEscada = ""
    let montaEscada = []

    for(var l = n; l >= 1; l--){
        for (var i = 1; i <= n; i++){
            if(l > i){
                linhaEscada += " "
            }
            if(l <= i){
                linhaEscada += "#"
            }
        }
        montaEscada.push(linhaEscada)
        linhaEscada = ""
    }
    
    return montaEscada.join("\n")
}
console.log(staircase(6))