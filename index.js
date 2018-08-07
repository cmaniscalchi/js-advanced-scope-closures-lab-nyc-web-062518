function produceDrivingRange(blockRange) {
  return function(start, end) {
    const distance = Math.abs(parseInt(end) - parseInt(start));
    const difference = blockRange - distance

    if (difference >= 0) {
      return `within range by ${difference}`;
    }
    else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip) {
  return function (fare) {
    return fare * tip
  }
}

function CreateDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name
    }
  }
}
