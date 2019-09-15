function primeFactors(number) {
  // TODO 
  let result = []
  let i = 2
  
  do{
    while(number%i == 0){
      result.push(i)
      number/=i
    }
    i++
  }while(number>1)
  
  return result

}

export { primeFactors };
