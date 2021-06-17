//Variáveis referentes a bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 23;
let raio = diametro / 2;

//Sounds of the game
let raquetada;
let ponto;
let trilha ;

//Chance do openente errar
let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("../trilha.mp3");
  raquetada = loadSound("../raquetada.mp3");
  ponto = loadSound("../ponto.mp3");
}

//variaveis referentes a velocidade da bolinha
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

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
  trilha.loop();
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
    raquetada.play();

  }
}

function colisaoRaqueteLibrary(x,y){
  hit = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

  if (hit) {
    velocidadeXBolinha *= -1;
    raquetada.play();

  }

}
  function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
    calculaChanceDeErrar();
  }



  function incluirPlacar(){
    stroke(255);
    textSize(18);
    textAlign(CENTER);

    fill(color(231, 148, 0));
    rect(150, 10, 40, 20);

    fill(255);
    text(meusPontos, 170, 26);

    fill(color(231, 148, 0));
    rect(450, 10, 40, 20);

    fill(255);
    text(pontosDoOponente, 470, 26);
  }

  function marcaPontos(){
    if(xBolinha > 589){
      meusPontos += 1;
      ponto.play();
    }
    

    if (xBolinha < 11) {
      pontosDoOponente += 1;
      ponto.play();

    }
  }

  function calculaChanceDeErrar() {
    if (pontosDoOponente >= meusPontos) {
      chanceDeErrar += 1
      if (chanceDeErrar >= 39){
      chanceDeErrar = 40
      }
    } else {
      chanceDeErrar -= 1
      if (chanceDeErrar <= 35){
      chanceDeErrar = 35
      }
    }
  }


