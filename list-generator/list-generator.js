function createList(number, text = 'Text') {
  // TODO
  let response = '<ul>\n'
  for(let i=1;i<=number;i++){
    response+='  <li>'+text+' '+i.toString()+'</li>\n'
  }
  response+='</ul>'
  return response
}

export { createList };
