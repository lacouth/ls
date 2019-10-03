function mirror(a,b){
    let array = []
    for(let i=a;i<=b;i++)
        array.push(i)
    
    return parseInt(array.join('')
                         .concat(array.map( v => v.toString().split('').reverse().join(''))
                                      .reverse()
                                      .join('')))
}

export{mirror}