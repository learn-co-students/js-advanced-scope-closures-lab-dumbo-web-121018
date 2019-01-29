function produceDrivingRange(blockRange) {
  return function (start, destination) {
    const arr1 = start.split("t");
    const arr2 = destination.split("t");
    const x = parseInt(arr1[0]);
    const y = parseInt(arr2[0]);
    const distance = Math.abs(x-y);
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
};

function produceTipCalculator (tip) {
  return function (fare) {
    return fare * tip;
  }
}

const createDriver = function(name) {
  let driverId = 0;
  return class Driver {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
