function randomIntBetween(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function rollXdY(x,y){
 return rollXdYrerollA(x,y,0);
}

function rollXdYrerollA(x,y,a) {
	var sum=0
 	for (var i=0;i<x;i++)
 	{
 		var j=0;
 		while (j <= a) {
 			j = randomIntBetween(1,y);
 		};
 		sum += j;
 	}
 return sum;
}

function rollBestXofYdZIgnoreA(x,y,z,a){
	//check if a is undefined
	if (typeof a == 'undefined') {
		a = 0;
	}
	var sum=0
	//roll y dice with size z
	//x times, grab highest value
	dieResults = new Array();
	//roll y dice of size z
	for (var i=0; i<y;i++){
		dieResults.push(rollXdYrerollA(1,z,a));
	};
	//grab highest value, then delete that value
	for (var i=0; i<x;i++){
		var highestValue = Math.max.apply(Math,dieResults);
		sum += highestValue;
		dieResults.splice(dieResults.indexOf(highestValue),1);
	};
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

function validatePositiveIntegerInput(keyEvent) {
		if (keyEvent.keyCode != 8 && keyEvent.keyCode != 46 && (keyEvent.keyCode < 48 || keyEvent.keyCode > 57)) {
			keyEvent.preventDefault();
			return false;
		}
		else {
			return true;
		}
}

function validateLength(keyEvent,input,existingValue,maxlength) {
		if (existingValue.length >= maxlength && isAnyTextSelected(input) == false) {
			keyEvent.preventDefault();
			return false;
		}
		else {
			return true;
		}
}

function validateInRange(value,min,max) {
	if (value >= min && value <= max) {
		return true;
	}
	else {
		return false;
	};
}

function isAnyTextSelected(input) {
    if (typeof input.selectionStart == "number") {
      if (input.value.length - input.selectionStart > 0) {
      	return true;
      }
      else {
      	return false;
      };
    }
    else {
    	return false;
    };
}

function simpleClone(x,propertiesToAdd) {
	var y = _.extend({}, x);
	for (var property in propertiesToAdd) {
		y[property] = propertiesToAdd[property];
	};
	return y;
}