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
        if(camel[i]==' '){
          camel[i+1] = camel[i+1].toUpperCase()
        }
      }
      return camel.join()
  }
}

export { formatter };
