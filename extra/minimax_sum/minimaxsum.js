function minimaxsum(array){
    array.sort();
    let min = array.slice(0,4)
                   .reduce((acc,v)=>acc+v,0)
    let max = array.slice(array.length-4, array.length)
                   .reduce((acc,v)=>acc+v,0)

    return [min,max]
}

export{minimaxsum}