//Variáveis

  //Vars Canvas
  var xCanvas = 600;
  var yCanvas = 340;
  
    //Vars dificuldade
  var larguraMenuV = 500;
  var alturaMenuV = 150;
  var xMenuV = (xCanvas - larguraMenuV)/2;
  var yMenuV = (yCanvas - alturaMenuV)/2;
  
  var bottomDif1 = 230;
  var bottomDif2 = 230;
  var bottomDif3 = 230;
  var bottomDif4 = 230;
  var bottomDif5 = 230;
  
  var bottomV1 = false;
  var bottomV2 = false;
  var bottomV3 = false;
  var bottomV4 = false;
  var bottomV5 = false;
  
    //Vars Points
  var myPoints = 0;
  var pointsOp = 0;
  
    //Vars sound
  var raquetada;
  var ponto;
  var trilha;
  
    //Vars menu
  var alturaMenu = 200;
  var larguraMenu = 400;
  var xMenu = (xCanvas - larguraMenu)/2;
  var yMenu = (yCanvas - alturaMenu)/2;
  var estadoJogo = -1;
  var bottomA = 230;
  var bottomB = 230;
  var clickA = false;
  var clickB = false;
  
    //Vars Circle
  var xBall = xCanvas/2;
  var yBall = yCanvas/2;
  var diametro = 15;
  var raio = diametro/2;
  
    //Vars Ball speed
  var xSpeedBall = 8;
  var ySpeedBall = 8;
  
    //Vars my Rect
  var altura = 90;
  var largura = 7;
  var xRect = 5;
  var yRect = yCanvas/2 - altura/2;
  
    //Vars RectOp
  var xRectOp = 588;
  var yRectOp = yCanvas/2 - altura/2;
  var speedRectOp;
  var chanceErro = 0;
  var dificuldade = 0;
  var erro = 0;
  
  //funções
  
  function preload(){
    trilha = loadSound("trilha.mp4");
    ponto = loadSound("ponto.mp4");
    raquetada = loadSound("raquetada.mp4");
  }
  
  function createMenuDificuldade(){
    fill("white");
    rect(xMenuV, yMenuV, larguraMenuV, alturaMenuV);
    
    textAlign(CENTER);
    textSize(30);
    fill(0);
    text("Selecione o nível de dificuldade", 300, 150);
  }
  
  function bottomsNivel(){
    
    //1
    fill(bottomDif1);
    rect(80, 170, 40, 40);
    
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("1", 100, 200);
    
    //2
    fill(bottomDif2);
    rect(175, 170, 40, 40);
    
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("2", 195, 200);
    
    //3
    fill(bottomDif3);
    rect(270, 170, 40, 40);
    
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("3", 290, 200);
    
    //4
    fill(bottomDif4);
    rect(365, 170, 40, 40);
    
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("4", 385, 200);
    
    //5
    fill(bottomDif5);
    rect(460, 170, 40, 40);
    
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("5", 480, 200);
  }
  
  function bottomsV(){
    
    //1
    if (mouseX > 80 && mouseX < 120 && mouseY > 170 && mouseY < 210){
      bottomDif1 = 150;
      bottomV1 = true;
    } else{
      bottomDif1 = 230;
      bottomV1 = false;
    }
    
    //2
    if (mouseX > 175 && mouseX < 215 && mouseY > 170 && mouseY < 210){
      bottomDif2 = 150;
      bottomV2 = true;
    } else{
      bottomDif2 = 230;
      bottomV2 = false;
    }
    
    //3
    if (mouseX > 270 && mouseX < 310 && mouseY > 170 && mouseY < 210){
      bottomDif3 = 150;
      bottomV3 = true;
    } else{
      bottomDif3 = 230;
      bottomV3 = false;
    }
    
    //4
    if (mouseX > 365 && mouseX < 405 && mouseY > 170 && mouseY < 210){
      bottomDif4 = 150;
      bottomV4 = true;
    } else{
      bottomDif4 = 230;
      bottomV4 = false;
    }
    
    //5
    if (mouseX > 460 && mouseX < 500 && mouseY > 170 && mouseY < 210){
      bottomDif5 = 150;
      bottomV5 = true;
    } else{
      bottomDif5 = 230;
      bottomV5 = false;
    }
  }
  
  function clickDif(x, y){
    if(x === true && mouseIsPressed){
      xSpeedBall = y;
      ySpeedBall = y;
      estadoJogo = 0;
    }
  }
  
  function menuDificuldade(){
    bottomsV();
    clickDif(bottomV1, 6);
    clickDif(bottomV2, 7);
    clickDif(bottomV3, 8);
    clickDif(bottomV4, 9);
    clickDif(bottomV5, 10);
  }
  
  function menuDif(){
    createMenuDificuldade();
    bottomsNivel();
    menuDificuldade();
  }
  
  function bottomSolo(){
    fill(bottomA);
    rect(120, 130, 160, 80);
    
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("Solo", 200, 183);
  }
  
  function bottomMulti(){
    fill(bottomB);
    rect(320, 130, 160, 80);
    
    textAlign(CENTER);
    textSize(26);
    fill(0);
    text("multiplayer", 400, 183);
  }
  
  function createMenu(){
    rect(xMenu, yMenu, larguraMenu, alturaMenu);
    
    textAlign(CENTER);
    textSize(30);
    fill(0);
    text("Selecione o modo de jogo:", 300, 100);
    
    bottomSolo();
    bottomMulti();
  }
  
  function corBottoms(){
    if (mouseX > 120 && mouseX < 280 && mouseY > 130 && mouseY < 210){
      bottomA = 150;
      clickA = true;
    } else{
      bottomA = 230;
      clickA = false;
    }
    
    if (mouseX > 320 && mouseX < 480 && mouseY > 130 && mouseY < 210){
      bottomB = 150;
      clickB = true;
    } else{
      bottomB = 230;
      clickB = false;
    }
  }
  
  function clickBottoms(){
    if (clickA === true){
      if (mouseIsPressed){
        estadoJogo = 1;
      }
    }
    
    if (clickB === true){
      if(mouseIsPressed){
        estadoJogo = 2;
      }
    }
  }
  
  function menu(){
    //Cor dos botões
    corBottoms();
    
    //Click dos botões
    clickBottoms();
  }
  
  function setup() {
    createCanvas(xCanvas, yCanvas);
    trilha.loop();
  }
  
  function bolinha(){
    ball();
    movimentoBall();
    colisaoBorda();
    colisaoRect();
    colisaoRectOp();
  }
  
  function minhaRaquete(){
    raquete(xRect, yRect);
    movimentoRect();
  }
  
  function raqueteOponente(){
    raquete(xRectOp, yRectOp);
    movimentoRectOp();
  }
  
  function draw(){
    background(0);
    
    if (estadoJogo === -1){
      menuDif();
    }
    
    if (estadoJogo === 0){
      createMenu();
      menu();
    }
    
    if (estadoJogo === 1){
      //Criação/Movimentação Circle
      bolinha();
      
      //Criação/Movimentação Raquete
      minhaRaquete();
      
      //Criação/Movimentação RaqueteOp
      raqueteOponente();
    }
    
    if (estadoJogo === 2){
      //Criação/Movimentação Circle
      bolinha();
      
      //Criação/Movimentação Raquete
      minhaRaquete();
      
      //Criação/Movimentação RaqueteOp multiplayer
      raquete(xRectOp, yRectOp);
      movimentoRectOpMultiplayer();
    }
    
    //Placar
    placar();
  }
  
  function ball(){
    fill(255);
    circle(xBall, yBall, 15);
  }
  
  function movimentoBall(){
    xBall += xSpeedBall;
    yBall += ySpeedBall;
  }
  
  function colisaoBorda(){
    //Colisão X
    if (xBall + raio > width || xBall - raio < 0) {
      xSpeedBall *= -1;
    }
    
    //Colisão Y
    if (yBall + raio > height || yBall - raio < 0) {
      ySpeedBall *= -1
    }
  }
  
  function raquete(x, y){
    fill(255);
    rect(x, y, largura, altura)
  }
  
  function movimentoRect(){
    //Movimentando para cima
    if (keyIsDown(87)){
      yRect -= 10;
    }
    
    //Movimentando para baixo
    if (keyIsDown(83)){
      yRect += 10;
    }
  }
  
  function colisaoRect(){
    if (xBall - raio < xRect + largura && yBall - raio < yRect + altura && yBall + raio > yRect ){
      xSpeedBall *= -1;
      raquetada.play();
    }
  }
  
  function movimentoRectOp(){
    chanceErro = dificuldade*20;
    //erro = random((chanceErro*-1), chanceErro);
    if (chanceErro < 0){
      chanceErro = 0
    }
    
    //speedRectOp = yBall - yRectOp - altura/2 + chanceErro;
    speedRectOp = yBall + chanceErro - altura/2
    yRectOp = speedRectOp;
  }
  
  function movimentoRectOpMultiplayer(){
    //Movimentando para cima
    if (keyIsDown(UP_ARROW)){
      yRectOp -= 10;
    }
    
    //Movimentando para baixo
    if (keyIsDown(DOWN_ARROW)){
      yRectOp += 10;
    }
  }
  
  function colisaoRectOp(){
    if (xBall + raio > xRectOp && yBall - raio < yRectOp + altura && yBall + raio > yRectOp ){
      xSpeedBall *= -1;
      raquetada.play();
    }
  }
  
  function placar(){
    //Mostrando placar
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text(myPoints, 150, 26);
    text(pointsOp, 450, 26);
    
    //Add pontos
    if (xBall - raio < 0){
     pointsOp += 1;
     dificuldade += 1
     ponto.play();
    }
    if (xBall + raio > width){
      myPoints += 1;
      dificuldade -= 1
      ponto.play();
    }
  }