function hackerrank(string){ 
    string = string.split('')
    let hack ='hackerrank'
    let last = 0
    return hack.split('')
               .map((v,idx) => {
                            let i = string.slice(last)
                                          .indexOf(v)
                            if(i>=0){
                                last += ++i  
                                return last                            
                            }
                            return i
                        })
                .reduce((prev,next)=> prev <= next ? next : -1) > 0 ? 'YES':'NO' 

}

export{hackerrank}