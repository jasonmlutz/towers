class Game {
  constructor() {
    this.towers = [[4, 3, 2, 1], [], []]
  }

  run () {

  }
}

Game.prototype.promptMove = function () {
  // print the stacks
  this.towers.forEach(tower => {
    let towerDisplay = '|' + tower.join('-');
    console.log(towerDisplay);
  })
  // ask user for move selection
  console.log('please select starting tower for move')

  console.log('please select ending tower for move')
};

Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  // return false if startTower is empty
  let startTower = this.towers[startTowerIdx];
  let endTower = this.towers[endTowerIdx];
  if (startTower.length === 0) {
    return false
  }
  // return true if endTower is empty
  if (endTower.length === 0) {
    return true
  }
  // compare 'top' elements of startTower and endTower
  let startTowerTop = startTower[startTower.length - 1];
  let endTowerTop = endTower[endTower.length - 1];
  if (startTowerTop < endTowerTop) {
    return true;
  } else {
    return false;
  }
};

game = new Game;
