function hamming(dna1, dna2) {
  // TODO
  let contador = 0
  for (let i in dna1){
    if(dna1[i]!=dna2[i]){
      contador++
    }
  }
  return contador;
}

export { hamming };
