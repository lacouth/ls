function funny(string){
    const direta =  string.split('')
                          .map(l => l.charCodeAt(0))
    const indireta = [...direta].reverse()

    const a = direta.slice(0,direta.length-1)
                    .map((v,i)=>Math.abs(v-direta[i+1]))
    
    const b = indireta.slice(0,indireta.length-1)
                    .map((v,i)=>Math.abs(v-indireta[i+1]))
    
    return a.join('')==b.join('') ? 'Funny' : 'Not Funny' 

}

export{funny}