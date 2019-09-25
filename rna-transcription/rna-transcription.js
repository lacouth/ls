function toRna(dna) {
  // TODO
  let rna =''
  for (const l of dna) {
    switch(l){
      case 'C':
        rna+='G'
        break
      case 'G':
        rna+='C'
        break
      case 'A':
        rna+='U'
        break
      case 'T':
        rna+='A'
    }
    
  }
  return rna
}

export { toRna };
