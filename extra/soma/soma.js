function soma(a,b){
    return parseInt((a+b).toString()
                         .split('')
                         .filter(i => i!='0')
                         .join(''))
}

export{soma}