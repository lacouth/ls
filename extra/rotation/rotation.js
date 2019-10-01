function rotation(array, n){
    
    for(let i = 0; i < n; i++){
        array.push(array.shift())
    }
    return array
}

export{rotation}