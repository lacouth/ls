function socksCount(socks){
    let count = 0;
    
    for(let i=0; i<socks.length;i++){
        for(let j=i+1;j<socks.length;j++){
            if(socks[i]==socks[j]){
                count++
                socks.splice(j,1)
                break
            }
        }
    }
    return count

    
}

export {socksCount}