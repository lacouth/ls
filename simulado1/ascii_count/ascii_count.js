function ascii_count(string){
    return string.split('')
                 .reduce((acc,l)=> acc+l.charCodeAt(0),0)
}

export{ascii_count}