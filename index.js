const produceDrivingRange = (range) => {
  return function(start, end) {
    trip = parseInt(end) - parseInt(start);
    if (trip < range) {
      return `within range by ${Math.abs(range-trip)}`;
    } else {
      return `${Math.abs(range-trip)} blocks out of range`;
    }
  }
}

const produceTipCalculator = (float) => {
  return function (cost) {
    return float * cost;
  }
}

const createDriver = () => {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  };
}
