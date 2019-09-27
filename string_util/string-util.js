/**
 * text: string
 * action: lowercase, uppercase, camelcase, snakecase, reverse,
 *         countchar, countword, countline
 */
function formatter(text, action) {
  // TODO
  switch(action){
    case 'uppercase':
      return text.toUpperCase()
    case 'lowercase':
      return text.toLowerCase()
    case 'camelcase':
      let camel = text.toLowerCase().split('')
      camel[0] = camel[0].toUpperCase()
      for (let i in camel){
        if(camel[i-1]==' '){
          camel[i] = camel[i].toUpperCase()
        }
      }
      return camel.join("")
    case 'snakecase':
      return text.split('')
                 .map( l => l == ' ' ? '_': l)
                 .join('')
    case 'reverse':
      return text.split('')
                 .reverse()
                 .join('')
    case 'countchar':
      return text.split('')
                 .length
    case 'countword':
      return text.split('')
                 .reduce((acc,l)=> (l==' ' || l=='\n') ? acc+1: acc, 1)
    case 'countline':
      return text.split('')
                 .reduce((acc,l)=> l=='\n' ? acc+1: acc, 1)
  }
}

export { formatter };
