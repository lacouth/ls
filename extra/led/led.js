function led(n){
    return n.toString()
            .split('')
            .reduce((acc,v)=>{
                return acc+segmentos(v)
            },0)
}

function segmentos(n){
    switch(n){
        case '1':
            return 2
        case '2':
        case '3':
        case '5':
            return 5
        case '4':
            return 4
        case '6':
        case '9':
        case '0':
            return 6
        case '7':
            return 3
        case '8':
            return 7
    }
}

export{led}