function textTransform(text){
    return text.toUpperCase()
               .split('')
               .filter((l) => l!=' ')
               .join('-') 
}

export {textTransform}