function citation(name) {
  // TODO
  name = name.split(' ')
  let r = name[name.length - 1].toUpperCase()+ ';'
  for(let i=0;i<name.length -1 ; i++){
    r+=' ' + name[i]
  }
  return r;
}

function compactCitation(name) {
  // TODO
  name = name.split(' ')
  let r = name[name.length - 1].toUpperCase()+ ';'
  for(let i=0;i<name.length -1 ; i++){
    r+=' ' + name[i][0] + '.'
  }
  return r;
}

export { citation, compactCitation };
