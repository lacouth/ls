function pokedex(array){
    return 151 - [...new Set(array)].length
}

export{pokedex}