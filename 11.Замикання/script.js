// Task 1
/*

function calcSafePS () {
	var a = 0;
	var b = 0;
	var arr = [];
	arr[0] = function(newA, newB){
		if ((isNaN(parseFloat(newA)) != true) && (isNaN(parseFloat(newB)) != true) && newA > 0 && newB > 0) {
			a = newA;
			b = newB;
    }
	};
	arr[1] = function () {
		return [2 * a + 2 * b, a * b];
	};
	return arr;
}

var PS = calcSafePS();
PS[0](2, 3);
console.log(PS[1]());

PS[0](-2, 12);
console.log(PS[1]());

*/




// Task 2
/*

function createArrayIterator(array) {
		var i = 0;
		return function () {
			return array[i++];
		}
 }
 
 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined

 */




// Task 3
