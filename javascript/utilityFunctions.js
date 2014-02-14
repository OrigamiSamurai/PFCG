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

//hide/show everything in given div EXCEPT given jquery selector
function toggleAllExcept(parentElemJquery,childElemJquery,bool) {
	if (bool == true) {
		$(parentElemJquery).children().not(childElemJquery).show();
	}
	else if (bool == false) {
		$(parentElemJquery).children().not(childElemJquery).hide();
	};
}