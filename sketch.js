let xMAx = 600;
let yMAx = 400;
let xcow = xMAx / 2;
let ycow = yMAx * 0.5;

let xCloud = 0; 

function setup() {
  createCanvas(xMAx, yMAx);
}

function draw() {
  // Cielo
  background(117, 201, 252);

  push();
  noStroke(); 
  rectMode(CENTER);

  // Corpo mucca
  fill(255); 
  rect(xcow, ycow, 260, 160);

  // Macchie
  fill(40); 
  ellipse(xcow - 60, ycow - 80, 120, 120); 
  ellipse(xcow + 60, ycow + 80, 100, 100); 
  ellipse(xcow - 130, ycow + 20, 80, 80);  
  ellipse(xcow + 70, ycow - 80, 90, 90);   
  ellipse(xcow - 20, ycow + 15, 45, 45);

  // Maschere di taglio per le macchie
  fill(117, 201, 252);
  rect(xcow - 60, ycow - 141, 122, 122);   
  rect(xcow + 50, ycow + 131, 150, 102);   
  rect(xcow - 171, ycow + 20, 82, 82);     
  rect(xcow + 70, ycow - 126, 92, 92);

  // Mammella
  fill(255, 170, 220);
  ellipse(xcow - 40, ycow + 85, 90, 90);

  // Maschera Bianca per la Mammella
  fill(255);
  rect(xcow - 40, ycow + 60, 92, 40);

  // Capezzoli 
  fill(240, 130, 180); 
  ellipse(xcow - 60, ycow + 125, 10, 15); // Sinistro
  ellipse(xcow - 40, ycow + 130, 10, 15); // Centrale
  ellipse(xcow - 20, ycow + 125, 10, 15); // Destro

  // Coda e ciuffo
  fill(255);
  rect(xcow - 145, ycow - 72.5, 30, 15);
  rect(xcow - 152.5, ycow + 10, 15, 160);
  fill(40); 
  ellipse(xcow - 152.5, ycow + 100, 20, 20);

  // Collo
  fill(40); 
  triangle(xcow + 130, ycow - 80, xcow + 130, ycow + 40, xcow + 220, ycow + 80);
  
  // Orecchie
  fill(255); 
  ellipse(xcow + 165, ycow + 0, 20, 20);
  ellipse(xcow + 235, ycow + 0, 20, 20);

  // Testa
  fill(255);
  rect(xcow + 200, ycow + 40, 60, 100);

  // Macchia sulla testa 
  fill(40); 
  ellipse(xcow + 200, ycow - 10, 60, 60);
  fill(117, 201, 252); 
  rect(xcow + 200, ycow - 36, 52, 52);

  // Muso
  fill(255, 170, 220);
  rect(xcow + 200, ycow + 80, 60, 40);

  // Narici
  fill(200, 100, 150); 
  ellipse(xcow + 190, ycow + 80, 5, 5); 
  ellipse(xcow + 210, ycow + 80, 5, 5);
  
  // Occhi
  fill(40); 
  ellipse(xcow + 185, ycow + 35, 7, 12);
  ellipse(xcow + 215, ycow + 35, 7, 12);

  // Gambe
  fill(255); 
  rect(xcow - 100, ycow + 100, 30, 80); 
  fill(40);  
  rect(xcow + 80, ycow + 100, 30, 80);

// --- NUVOLE ---
  
  // Nuvole Alte
  randomSeed(42); 
  fill(255, 255, 255, 230); // Trasparenza

  // Ciclo iterativo. Esegue il blocco di codice al suo interno 5 volte per le nuvole alte e 3 volte per quelle basse
    for (let i = 0; i < 5; i++) {
      
    // Posizioni di base spaziali
    let offsetX = (i * 187) % 800; 
    let startY = random(ycow - 150, ycow - 60); 

    // Somma la coordinata di base della nuvola al contatore xCloud
    let cloudX = (xCloud + offsetX) % 800 - 150;
    
    let w1 = random(40, 60);
    let w2 = random(60, 90);
    let w3 = random(40, 60);
    
    ellipse(cloudX, startY, w1, w1 - 10);
    ellipse(cloudX + 30, startY - 15, w2, w2 - 20);
    ellipse(cloudX + 60, startY, w3, w3 - 10);
  }

  // Nuvole Basse
  randomSeed(12); 
  fill(255, 255, 255, 210); 
  
  for (let j = 0; j < 3; j++) {
    let offsetX = (j * 275) % 800; 
    let startY = random(ycow + 140, ycow + 170); 
    let cloudX = (xCloud + offsetX) % 800 - 150;
    
    let w1 = random(40, 60);
    let w2 = random(60, 90);
    let w3 = random(40, 60);
    
    ellipse(cloudX, startY, w1, w1 - 10);
    ellipse(cloudX + 30, startY - 15, w2, w2 - 20);
    ellipse(cloudX + 60, startY, w3, w3 - 10);
  }
 
  pop();

  // Coordinate
  fill(255); 
  text("mouseX: ${mouseX}, mouseY: ${mouseY}", 20, 20);

  xCloud = xCloud + 1;
  if (xCloud > 800) { 
  xCloud = 0;
}

}