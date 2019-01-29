// function produceDrivingRange(blockRange){
//   return function(){
//     if (blockRange <= 10) {
//       return true;
//
//     } else {
//       return false;
//     }
//   };
// }
//
//
// function produceTipCalculator(fare){
//   var tip = 0;
//   return function(){
//     tip += fare;
//   };
// }

function produceDrivingRange(blockRange) {
  return function(start, end) {
    let begin = parseInt(start);
    let finish = parseInt(end);
    let distanceTravelled = Math.abs(finish - begin);
    let difference = blockRange - distanceTravelled;

    if (difference > 0) {
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  };
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.id = ++driverId;
    }
  };
}
