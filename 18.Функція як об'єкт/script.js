// Task 1


function mul() {
	var result = 1;
	var counter = 0;
	for(var i = 0; i < arguments.length; i++){
		if(typeof (arguments[i]) === "number"){
			result *= arguments[i];
			counter++;
		}
	}
	if (counter == 0) return 0;
	return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0






// Task 2
/*

var country = {
    name: "Ukraine",
    language: "ukrainian",
    capital: {
        name: "Kyiv",
        population: 2907817,
        area: 847.66,
    },
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
format.call(country, "<" , ">"); // "<Ukraine>"
format.apply(country, ["[", "]"]); // "[Ukraine]"
format.call(country.capital, '"', '"'); // ""Kyiv""
format.apply(country.capital, ['', '']); // "Kyiv"

*/