// Task 1

var a = prompt("Enter a side of square: ");

if(a>0){
  S = a * a;
  document.write("S = ", S);
}
else {
  document.write("Error!");
}



// Task 2

var number = prompt("Enter a two-digit number: ");

if (number > 9 && number < 100) {
  document.write("Number: ", number);
  left_side = Math.floor(number / 10);
  right_side = number % 10;
  document.write(" This is left side of two-digit number: ", left_side);
  document.write(" This is right side of two-digit number: ", right_side);
} 
else {
  document.write("Error!");
}



// Task 3

var a = prompt("Enter a: ");
var b = prompt("Enter b: ");

if(a>2 && b<=3){
  document.write(true);
}
else {
  document.write(false);
}



// Task 4

var a = prompt("Enter a: ");
var b = prompt("Enter b: ");
var c = prompt("Enter c: ");

if(b>a && b<c){
  document.write(true);
}
else{
  document.write(false);
}



// Task 5

var number = prompt("Enter a number: ");

if(number % 2 == 0 && number % 1000 >= 100 && number <= 999){
  document.write(true);
}
else{
  document.write(false);
}

