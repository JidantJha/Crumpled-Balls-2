class Dustbin{
    constructor(x,y,width,height){
        var options ={
            'isStatic':true
        }
        this.dustbinThickness=20;
        //this.body1 = Bodies.rectangle(x,y,width,this.dustbinThickness,options);
        //World.add(world,this.body1);
        //this.body2 = Bodies.rectangle((x-(width/2)),(y-(height*2)),this.dustbinThickness,height,options);
        //World.add(world,this.body2);
        this.body3 = Bodies.rectangle(700,(y-(height*2)),this.dustbinThickness,height,options);
        World.add(world,this.body3);
        //this.body1.width=width;
        //this.body1.height=height;
        this.width=width;
        this.height=height;
    }
    display(){
       fill("white");

       //var posBottom=this.body1.position;
       //var posLeft=this.body2.position;
       var posRight=this.body3.position;
       bin=createSprite(700,360,20,20);
       bin.addImage(binImage);
       bin.scale=0.2;

       push()
       translate(posRight.x,posRight.y)
       rectMode(CENTER)
       //strokeWeight(4)
       stroke(255)
       angleMode(RADIANS)
       fill(255)
       rotate(-1*this.angle)
       rect(0,0,this.dustbinThickness,this.height)
       pop()

       

       
       
       
    }
}