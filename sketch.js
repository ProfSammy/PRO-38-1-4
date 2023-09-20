var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");

  // adicione a imagem para os jogadores

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);

  // verifica número de jogadores conectados
  
  // verifica o estado do jogo para começar a partida
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
