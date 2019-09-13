function min(array) {
  // TODO
  return Math.min(...array)
}

function max(array) {
  // TODO
  return Math.max(...array)
}

function range(length, last, step=1) {
  // TODO
  let start = length;
  if (last == undefined) {
    start = 0
    last = length
  } else {
    start = length 
  }

  let array = []
  for (let i = start; i < last; i+=step) {
    array.push(i)
  }
  return array

}

function zip(...arrays) {
  // TODO
}

function uniq(array) {
  // TODO
}

function sortNum(array) {
  // TODO
}

export { min, max, range, zip, uniq, sortNum };
