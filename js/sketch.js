//Variáveis referentes a bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//variaveis referentes a velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variavel colisao raquete
let hit = false; 


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();

  mostraRaquete();

  movimentaRaquete();

  //verificaColisaoRaquete();
  colisaoRaqueteLibrary();

  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}


function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda(){
  if(xBolinha  + raio> width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
   if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);

}

function movimentaRaquete(){

  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }

}

function verificaColisaoRaquete(){            // &&Verificando se a bolinha esta acima da raquete && verificando se a bolinha esta abaixo da raquete
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteLibrary(){
  hit = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

  if (hit) {
    velocidadeXBolinha *= -1;
  }
}


