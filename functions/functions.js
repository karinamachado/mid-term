// Invoke each function you write with an example and console.log the result

// multiply

var multiply = function ( num1, num2){

  return num1*num2;
};
console.log(multiply(10,5));

// whatForLunch

var whatForLunch = function( name, food){

	return name + 'had' + food + 'for lunch today'

}
console.log(whatForLunch('karina', 'apple'));

// isLargerThan100

var isLargerThan100 = function(){

	var state = 100;
	if(state > 100){
		console.log('ok is true');
	}else{
		console.log('is false, no large than 100');
	}

	return isLargerThan100

};
// anyEvens

var anyEvens = function(){
 


}

// printDataType



// isDivisibleBy

/*Create a function that takes in two numbers, 
and returns whether the first number is evenly divisible by the second 
number. If it is return true, if not return false.
*/

var isDivisibleBy = function(num1, num2){
var output = " ";	

if(num1 % num2 ==0){
	output += " true";
}else{
	output += " false ";
	console.log(isDivisibleBy(10,5));
}


// fizzBuzz

for(var n = 1; n < 100; n++){
	var output = " ";
	if(n % 3 == 0)
	 output +=	"Fizz' if it can be divided evenly by 3 ";
	if( n % 5 == 0)
		output += "'Buzz' if it can be divided evenly by 5";
	console.log(output || n);
}










