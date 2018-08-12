

function produceDrivingRange(blockRange) {
  return function tripDistance(start, end) {
    const distance = Math.abs(parseInt(start) - parseInt(end))
    const difference = blockRange - distance
    return difference >= 0 ? `within range by ${blockRange - distance}` : `${Math.abs(difference)} blocks out of range`
  }
}

function produceTipCalculator(percentage) {
  return cost => cost * percentage
  }
