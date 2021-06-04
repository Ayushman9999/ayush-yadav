class Bob{
constructor (x,y){
var options = {

isStatic: false,
restitution: 1,
friction: 0,
density: 7.8,


}

this.body = Bodies.circle(x,y,25,options);

World.add(World,this.body);
console.log(thisbody);


}

display(){
Push();
ellipseMode(RADIUS);
fill(254,0,255);
ellipse(this.body.Position.x,this.body.Position.y,25,25);

Pop();



 }

}