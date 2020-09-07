const Engine= Matter.Engine; 
const World = Matter.World;
 const Bodies = Matter.Bodies;
  var engine,world; function setup() {
     createCanvas(400,400);
      engine=Engine.create();
       world=engine.world;
        var ground_options ={
           isStatic : true } 

        //   object=Bodies.rectangle(200,100,50,10,options);
            ground=Bodies.rectangle(200,300,200,10,ground_options);
             World.add(world,ground);
             }
              function draw() {
                background(0);
                 Engine.update(engine);
                  rectMode(CENTER);
                   rect(ground.position.x,ground.position.y,50,10);
                    //rect(200,200,50,50); 
                    drawSprites(); 
                  }
