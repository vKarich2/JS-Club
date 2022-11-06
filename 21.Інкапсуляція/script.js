// Task 1


function Audioplayer (volume) {
	this.__volume = 0;
	if (this.__validVolume(volume)) {
		this.__volume = volume;
	}
}

Audioplayer.prototype.__validVolume = function (volume) {
	if (volume >= 0 && volume <= 100) {
		return true;
	} else {
		return false;
	}
};

Audioplayer.prototype.getVolume = function () {
	return this.__volume;
};

Audioplayer.prototype.setVolume = function (volume) {
	if (this.__validVolume(volume)) {
		this.__volume = volume;
	}
};

Audioplayer.prototype.getSetVolume = function (volume) {
	if (volume === undefined) {
		return this.__volume;
	} else {
			if (this.__validVolume(volume)) {
				this.__volume = volume;
			}
	}
};

var audioplayer = new Audioplayer(0);

console.log(audioplayer.getSetVolume());
audioplayer.getSetVolume(100);
console.log(audioplayer.getSetVolume());
audioplayer.getSetVolume(-15);
console.log(audioplayer.getSetVolume());





// Task 2
/*

function Sumator (firstNum, secondNum) {
	this.result = 0;
	if (this.__firstNumberValid(firstNum)) {
		this.__firstNumber = firstNum;
	}
	if (this.__secondNumberValid(secondNum)) {
		this.__secondNumber = secondNum;
	}
}

Sumator.prototype.__firstNumberValid = function (firstNum) {
	if (typeof firstNum === 'number') {
		return true;
	} else {
		return false;
	}
};

Sumator.prototype.__secondNumberValid = function (secondNum) {
	if (typeof secondNum === 'number') {
		return true;
	} else {
		return false;
	}
};

Sumator.prototype.__calc = function () {
	this.result = this.__firstNumber + this.__secondNumber;
	return this.result;
};

Sumator.prototype.getSetNumbers = function (firstNum, secondNum) {
	if (firstNum === undefined && secondNum === undefined) {
		return this.__calc();
	} else {
			if (this.__firstNumberValid(firstNum) && this.__secondNumberValid(secondNum)) {
				this.__firstNumber = firstNum;
				this.__secondNumber = secondNum;
			}
	}
};

var sumator = new Sumator(20, 3);

console.log(sumator.getSetNumbers());
sumator.getSetNumbers(15, 'a');
console.log(sumator.getSetNumbers());
sumator.getSetNumbers(15, undefined);
console.log(sumator.getSetNumbers());


*/