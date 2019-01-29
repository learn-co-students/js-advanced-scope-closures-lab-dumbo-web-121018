const produceDrivingRange = blockRange => {
  return (startBlock, endBlock) => {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(start - end);
    let blocks = Math.abs(blockRange - distance);

    if (distance <= blockRange) {
      return `within range by ${blocks}`;
    } else {
      return `${blocks} blocks out of range`;
    }
  }
}

const produceTipCalculator = fare => {
  return tip => {
    return fare * (tip);
  }
}

const createDriver = () => {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
