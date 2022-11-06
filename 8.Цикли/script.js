// Task 1


var a = parseFloat(prompt("Enter a: "));
var b = parseFloat(prompt("Enter b: "));

if(a != b && a > b){
	while(a >= b){
		a -= b;
	}
	console.log(a);
}
else{
	console.log("Error!");
}






// Task 2
/*

var n = parseInt(prompt("Enter n: "));
var res = "";

while(n > 0){
	res += n % 10;
	n = Math.floor(n / 10);
}

for(var i = 0; i < res.length; i++){
	console.log(res[i]);
}

*/




// Task 3
/*

var a = parseInt(prompt("Enter a: "));
var b = parseInt(prompt("Enter b: "));
var sum = 0;

if(a < b){
	for(var i = a; i <= b; i++){
		sum += i;
	}
	console.log(sum);
}
else{
	console.log("Error!");
}

*/




// Task 4
/*

var n = parseInt(prompt("Enter n: "));
var factorial = 1;

if(n > 0){
	for(var i = n; i >= 1; i--){
		factorial *= i;
	}
	console.log(factorial);
}
else{
	console.log("Error!");
}

*/




// Task 5
/*

var arr = [];
var sum = 0;

do{
	var n = prompt("Enter the number: ");
	if(isNaN(parseInt(n)) != true){
		arr += n;
	}
} while(isNaN(parseInt(n)) != true);

console.log(arr);

for(var i = 0; i < arr.length; i++){
	sum += parseInt(arr[i]);
}

console.log(sum);

*/



// Task 6
/*

var a = parseInt(prompt("Enter a: "));
var b = parseInt(prompt("Enter b: "));

if(a < b){
	for(var i = 1; i <= b - a + 1; i++){
		for(var j = 1; j <= i; j++){
			console.log(a + i - 1);
		}
	}
}
else{
	console.log("Error!");
}

*/


