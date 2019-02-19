function produceDrivingRange(blockRange){
  return function (startpoint,endpoint){
    let start = parseInt(startpoint)
    let end = parseInt(endpoint)
    let trip = Math.abs(end - start)
    let difference = blockRange - trip
    if (difference > 0){
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare * percent
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name,
      this.id = driverId++
    }
  }
}
