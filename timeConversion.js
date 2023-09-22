let s = "02:05:45PM"

function timeConversion(s) {
    let tempo = s.substr(s.length-2,s.length-1)
    let hora = s.split(':')[0]
    let min = s.split(':')[1]
    let segInteiro = s.split(':')[2]
    let seg = segInteiro.slice(0,2)

    if(tempo == 'AM' && hora == '12'){
        let horaCompleta = '00:' + min + ':' + seg 
        return horaCompleta
    }
    if(tempo == 'AM'&& hora != '12'){
        let horaCompleta = hora + ':' + min + ':' + seg 
        return horaCompleta
    }
    if(tempo == 'PM' && hora == '12'){
        let horaCompleta = hora + ':' + min + ':' + seg 
        return horaCompleta
    }
    if(tempo == 'PM' && hora != '12'){
        let converteHora = Number(hora) + 12
        let horaCompleta = converteHora.toString() + ':' + min + ':' + seg 
        return horaCompleta
    }

    
}
console.log(timeConversion(s))