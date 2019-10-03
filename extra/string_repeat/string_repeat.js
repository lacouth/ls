function string_repeat(string, n){
    let new_string = ''
    for(let i=0;i<n;i++)
        new_string = new_string.concat(string)
    
    return new_string.slice(0,n)
                     .split('')
                     .reduce((acc,l)=>{
                        if(l=='a')
                            return ++acc
                        return acc
                     },0)
                     
    
}

export{string_repeat}