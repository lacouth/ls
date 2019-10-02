function  birds(array){
    let unique = [...new Set(array)]
    let count = unique.map(v => {
        return array.reduce((acc,i)=>{
            if(i==v)
                return acc+=1
            return acc
        },0)
    })

    return unique[count.indexOf(Math.max(...count))]
}

export {birds}