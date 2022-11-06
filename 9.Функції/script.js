// Task 1


function pow(x, n){
	var res = 1;
	for(var i = 1; i <= n; i++){
		res *= x;
	}
	return res;
}

console.log(pow(3, 5));






// Task 2
/*

function min(arr){
	for(var i = 0; i < arr.length - 1; i++){
		for(var j = 0; j < (arr.length - 1) - i; j++){
			if(arr[j] > arr[j + 1]) {
				var temp = arr[j];

				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr[0];
}

console.log(min([2, 5, 6, 1, -5, -13]));

*/




// Task 3
/*

function sign(x){
	if(x < 0){
		return -1;
	}
	else if(x == 0){
		return 0;
	}
	else{
		return 1;
	}
}

console.log(sign(-123));
console.log(sign(0));
console.log(sign(53351));

*/




// Task 4
/*

function calc(a, b, op){
	switch (op){
		case 1:
			return a - b;
		case 2:
			return a * b;
		case 3:
			return a / b;
		default:
			return a + b;
	}
}

console.log(calc(2, 3, 1)); // -
console.log(calc(2, 3, 2)); // *
console.log(calc(2, 3, 3)); // /
console.log(calc(2, 3, 4)); // +

console.log(calc(2, 3, -21)); // +

*/




// Task 5
/*

var k = parseInt(prompt("Enter k: "));
var n = parseInt(prompt("Enter n: "));

function digitN(k, n){
	if(k > 0 && n >= 0){
		var kString = k.toString();
    if (kString.length < n) return -1;
    return [...kString].reverse()[n - 1];
	}
	return "Error!";
}

console.log(digitN(k, n));

*/

