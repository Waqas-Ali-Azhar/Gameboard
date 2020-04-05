var debug = true;
$(document).ready(function(){



});

function GameBoard(n){
  this.size = n;
  this.board = [[],[]];
  this.player = [{new Player({name:"player1", currentCell:"7"})}];

}

GameBoard.prototype.addPlayer(objPlayer){
  this.player = this.player.push(objPlayer);
  this.board[objPlayer.positionX][objPlayer.positionY] = 1;
}

function Player(playerObj){
  this.name = playerObj.name;
  this.positionX = playerObj.x;
  this.positionY = playerObj.y;
  this.health = playerObj.health;
}

Player.prototype.moveForward = function(x,y){
  this.positionX = ++this.positionX;
  this.positionY = ++this.positionX;
  
  return {this.positionX+""+this.positionY};
}

Player.prototype.moveBackward = function(){
  this.positionX = --this.positionX;
  this.positionY = --this.positionX;
  return this.positionX+""+this.positionY;
}

Player.prototype.moveUp = function(){
  this.positionY = --this.positionY;
  return this.positionX+""+this.positionY;
}

Player.prototype.moveDown = function(){

}

Player.prototype.attack = function(){

}

Player.prototype.defend = function(){

}

Player.prototype.die = function(){

}


function Enemy(enemyObj){
  this.color = enemyObj.color;
  this.src = enemyObj.src;
  this.type = enemyObj.src;
  this.value = enemyObj.value;
}

function Weapon(weaponObj){
  this.color = weaponObj.color;
  this.src = weaponObj.color;
  this.value = weaponObj.value;
}


function Obstacle(obstacleObj){
  this.color = obstacleObj.color;
  this.size = obstacleObj.size;
  this.positionX = obstacleObj.positionX;
  this.positionY = obstacleObj.positionY;
}

function Bullet(bulletObj){
  this.image = bulletObj.image;
  this.size = bulletObj.size;
  this.power = bulletobj.power;
}

