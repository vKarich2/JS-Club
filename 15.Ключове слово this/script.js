var calculator = {
  read: function(){
		this.firstNum = Number(prompt("Enter the first number: "));
		this.secondNum = Number(prompt("Enter the second number: "));
	},
	sum: function(){
		return this.firstNum + this.secondNum;
	},
	mul: function(){
		return this.firstNum * this.secondNum;
	}
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
