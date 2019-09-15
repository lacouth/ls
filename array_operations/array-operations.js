function sum(array) {
  // TODO
  return array.reduce((acc,v) => acc+v)
}

function product(array) {
  // TODO
  return array.reduce((acc,v) => acc*v,1)
}

function sumOdds(array) {
  // TODO
  return array.reduce((acc,v) => (v%2 === 1) ? acc+v : acc, 0)
}

export { sum, product, sumOdds };
