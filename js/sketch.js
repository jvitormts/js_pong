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


//variaveis da Raquete do Oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


//variavel colisao raquete
let hit = false; 

// Pontos da partida
let pontosDoOponente = 0;
let meusPontos = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();

  mostraRaquete(xRaquete, yRaquete);

  movimentaRaquete();

  //verificaColisaoRaquete();
  colisaoRaqueteLibrary(xRaquete,yRaquete);
  colisaoRaqueteLibrary(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);

  movimentaRaqueteOponente();

  incluirPlacar();
  marcaPontos();


  
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

function mostraRaquete(x, y){
  rect(x,y,raqueteComprimento,raqueteAltura);

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

function colisaoRaqueteLibrary(x,y){
  hit = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

  if (hit) {
    velocidadeXBolinha *= -1;
  }

}
  function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 50;
    yRaqueteOponente += velocidadeYOponente;
  }

  function incluirPlacar(){
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
  }

  function marcaPontos(){
    if(xBolinha > 587){
      meusPontos += 1;
    }
    

    if (xBolinha < 13) {
      pontosDoOponente += 1;
    }
  }


