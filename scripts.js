var calc_meters = function(inches){
	var meters = (inches * 2.54 / 100);
  return meters;
};

var kilo = function(lbs){
	return lbs / 2.2;
};

var BMI = function(){
	var weight = prompt("Enter your weight: ");
  var height = prompt("Enter your height: ");
	alert(kilo(parseInt(weight)) / Math.pow(calc_meters(parseInt(height)), 2));
};

BMI();
