function withdraw(number) {
  // TODO
  let response = []
  let notas = [100,50,20,10,5,2]
  let div;
  for(let nota of notas){
    div = Math.floor(number/nota)
    if(div > 0){
      response.push([nota, div])
      number -= nota*div;
    }
  }
  return response;
}

export { withdraw };
