var mon1erLichen;
var nbPoints = 17;

function setup(){
    var divVisu = document.querySelector("#visu");
    var myCanvas = createCanvas(divVisu.offsetWidth, divVisu.offsetHeight);
    myCanvas.parent("visu");
    background(255);
    fill(0);
    mon1erLichen = new Lichen("pioupiou",100);
    frameRate(1);
}

function draw(){
    background(255);
    mon1erLichen.draw();
}

function windowResized() {
    var divVisu = document.querySelector("#visu");
    resizeCanvas(divVisu.offsetWidth, divVisu.offsetHeight);
    background(0);
}


class Lichen{
    name;
    color;
    scale;
    
    constructor(name,scale){
        this.name = name;
        this.scale = scale;
    }
    
    draw(){
        translate(width/2,height/2);
        beginShape();
            for(var i=0; i<nbPoints; i++){
                curveVertex(cos(i*TWO_PI/nbPoints)*this.scale + random(-25,25), sin(i*TWO_PI/nbPoints)*this.scale + random(-25,25));
            }
        
        //curveVertex(cos(0)*this.scale, sin(0)*this.scale);
        endShape(CLOSE);
        resetMatrix();
    }
}