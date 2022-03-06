function increment(arr, value) {
  return arr.map((element)=>{
    return {'val': element.val += value}
  })
}

module.exports = increment
