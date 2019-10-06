function vales(string){
    let pos = string.split('').map( v => v=='D' ? -1 : 1)
    let level = 0;
    let flag = false
    let count = 0;
    for (let i=0;i<pos.length;++i){
        level+=pos[i]
        if(level < 0 && !flag){
            flag = true
        }else if( level==0 && flag){
            flag = false
            count++;
        }
    }
    return count;

    // let level = 0;
    // let flag = false
    // return  string.split('')
    //             .map( l => l=='D' ? -1 : 1)
    //             .reduce((acc,v)=>{
    //                 level+=v
    //                 if(level < 0 && !flag){
    //                     flag = true
    //                     return acc
    //                 }else if( level==0 && flag){
    //                     flag = false
    //                     return ++acc;
    //                 }
    //             },0)
}

export{vales}