function randomIntBetween(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function rollxdy(x,y){
 var sum=0
 for (var i=0;i<x;i++)
 {
  sum += randomIntBetween(1,y);
 }
 return sum; 
}
