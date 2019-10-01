function proportion(array){
    let n = array.filter(i => i<0)
                 .length/array.length
    let z = array.filter(i => i==0)
                 .length/array.length
    let p = array.filter(i => i>0)
                 .length/array.length

    return [n,z,p]
}

export{proportion}