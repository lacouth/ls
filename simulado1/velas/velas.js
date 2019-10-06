function velas(array){
    let max = Math.max(...array)
    return array.reduce((acc,v)=> v==max ? ++acc:acc, 0)
}

export{velas}