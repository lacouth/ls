function frutas(array){
    let s = array[0]
    let t = array[1]
    let a = array[2]
    let b = array[3]

    let macas = array.slice(4,7)
    let laranjas = array.slice(7)
    
    let n_macas =  macas.filter( v => v >= (s - a)).length
    let n_laranjas = laranjas.filter(v => v <= (t - b) ).length
    

    return [n_macas, n_laranjas]


}

export {frutas}