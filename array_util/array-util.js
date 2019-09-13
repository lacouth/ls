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
  let start;
  

  [start,last] = last ? [length,last] : [0,length] 
  let array = []
  
  for (let i = start; i < last; i+=step) {
    array.push(i)
  }
  return array

}

function zip(...arrays) {
  // TODO
  let response = []
  for (let index in arrays){
    response.push([])
    for(let values of arrays){
      response[index].push(values[index])
    }
  }
  return response
}

function uniq(array) {
  // TODO
  let response = [array.shift()]

  for(let value of array){
    if(!response.includes(value)){
      response.push(value)
    }
  }
  return response
}

function sortNum(array) {
  // TODO
  return array.sort((a,b)=>a-b)
}

export { min, max, range, zip, uniq, sortNum };
