
function socksCount(socks){
    // let count = 0;
    
    // for(let i=0; i<socks.length;i++){
    //     for(let j=i+1;j<socks.length;j++){
    //         if(socks[i]==socks[j]){
    //             count++
    //             socks.splice(j,1)
    //             break
    //         }
    //     }
    // }
    // return count

    let result = [...new Set(socks)]
    return result.map(v => parseInt(socks.reduce((acc,s)=> s==v ? ++acc : acc, 0) / 2))
                 .reduce((acc,v)=>acc+v, 0)
    
}

export {socksCount}