// Task 1

var number = prompt("Enter a number: ");
if(number > 0){
	number++;
	document.write("Result: ", number);
} else if(number == 0){
	number = 10;
	document.write("Result: ", number);
} else {
	number -= 2;
	document.write("Result: ", number);
}




// Task 2

var number = prompt("Enter a number: ");

if(number > 0 && number % 2 == 0){document.write("Додатне парне число");} 
else if(number > 0 && number % 2 != 0){document.write("Додатне непарне число");} 
else if (number < 0 && number % 2 == 0) {document.write("Від’ємне парне число");} 
else if (number < 0 && number % 2 != 0) {document.write("Від’ємне непарне число");} 
else {document.write("Нульове число");}




// Task 3

var arr = [
  prompt("Enter the first number: "),
  prompt("Enter the second number: "),
  prompt("Enter the third number: "),
  prompt("Enter the fourth number: ")
];

var result = 0;

for(var i = 1; i < arr.length; i++){
  if(arr[i] != arr[i-1]){result = i;}
  if(arr[arr.length-1] != arr[arr.length-2] && arr[0] != arr[arr.length-1]){result = arr.length;}
}

console.log(result);



// Task 4

var k = prompt("Введіть число: ");

switch (k) {
  case "1":
    document.write("Погано");
    break;
  case "2":
    document.write("Незадовільно");
    break;
  case "3":
    document.write("Задовільно");
    break;
  case "4":
    document.write("Добре");
    break;
  case "5":
    document.write("Відмінно");
    break;
	default:
		document.write("Помилка");
		break;
}
