function compareRobots(robotOne, robotTwo) {
    robotOneResults = [];
    robotTwoResults = [];
    for (let i=0; i<100; i++) {
      let villageState = VillageState.random();
      robotOneResults.push(runRobot(villageState, robotOne, []));
      robotTwoResults.push(runRobot(villageState, robotTwo, []));
    }
    console.log(`Robot 1: ${getAverage(robotOneResults)}`);
    console.log(`Robot 2: ${getAverage(robotTwoResults)}`);
  }
  
  function getAverage(inputArray) {
    return inputArray.reduce((acc, c) => (acc + c)) / inputArray.length;
  }
  
  compareRobots(goalOrientedRobot, randomRobot); // See codepen or the book for the definition of these robots
  // > Robot 1: 16.69
  // > Robot 2: 92.04
  