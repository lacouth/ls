function triplets(a,b){
    const a_test = a.reduce((acc,val,idx)=> val > b[idx]? ++acc:acc, 0)
    const b_test = b.reduce((acc,val,idx)=> val > a[idx]? ++acc:acc, 0)
    return [a_test, b_test]
}

export {triplets}