// Task 1
// Анонімна функція обгортка
/*

var user = {
  name: "Tom",
  format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
  }
};

var tomFormat = function () {
  user.format("<<<", ">>>");
};


// Метод bind()


var user = {
  name: "Tom"
};

function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}

var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"

*/




// Task 2
/*

function mul(a, b) {
    return a * b;
}

var doubleMul = mul.bind(mul, 2);
var qudraMul = mul.bind(mul, 4);
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20

*/




// Task 3

function bind(func, context) {
  return function(){
		return func.apply(context, arguments);
	};
}
function func() {
    console.log(this.name + " - " + this.age);
}
var user = {
    name: "Tom",
    age: 20,
};
var f = bind(func, user);
f(); // "Tom – 20"