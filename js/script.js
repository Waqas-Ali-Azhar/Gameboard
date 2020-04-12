var debug = true;
var gameBoard = null;
$(document).ready(function(){
 gameBoard = new GameBoard(5);


});




function GameBoard(n){
  this.size = n;
  //this.board = [[x],[y]];
  this.player = [{new Player({name:"player1", currentCell:"7"})}];
  this.displayBoard(this);
}


function Helper(){
}

Helper.prototype.generatePosition = function(size){
  var position = Math.floor((Math.random() * (size*size)));
}



GameBoard.prototype.assignPlayer = function(playerObj){
  this.board[x][y] = playerObj.name;
  
}

GameBoard.prototype.checkPosition = function(){

};

GameBoard.prototype.displayBoard = function(boardObj){
  var size = boardObj.size;
  var html = '<div class="table">';
  for(var i=0; i<size; ++i){
    html += '<div class="row '+(i+1)+' ">';
    for(var j=0; j<size; ++j){
      html += '<div class="cell '+((i*size)+j+1)+'">';
      html += '</div>';
    }
    html +="</div>";
  }

  //end table
  html +="</div>"
  $("div.container").html(html);

};

function displayBoard(){
  // create html for table & link it with a div
}

GameBoard.prototype.addPlayer = function(objPlayer){
  this.player = this.player.push(objPlayer);
  this.board[objPlayer.positionX][objPlayer.positionY] = 1;
}

function Player(playerObj){
  this.name = playerObj.name;
  this.positionX = playerObj.x;
  this.positionY = playerObj.y;
  this.health = playerObj.health;
  this.showPlayer();
  gameBoard.assignPlayer(this);
}

Player.prototype.showPlayer = function(x,y){
  var poisiton = x+y;
  $('table tr td')
}

Player.prototype.moveForward = function(x,y){
  this.positionX = ++this.positionX;
  this.positionY = ++this.positionX;
  if(debug){
    console.log(this.positionX+""+this.positionY);
  }
  return { x:this.positionX, y:this.positionY};
}

Player.prototype.moveBackward = function(){
  this.positionX = --this.positionX;
  this.positionY = --this.positionX;
  if(debug){
    console.log(this.positionX+""+this.positionY);
  }
  return { x:this.positionX, y:this.positionY};
}

Player.prototype.moveUp = function(){
  this.positionY = --this.positionY;
  if(debug){
    console.log(this.positionX+""+this.positionY);
  }
  return { x:this.positionX, y:this.positionY };
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

