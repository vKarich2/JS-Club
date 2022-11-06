function digitSum(k) {
	if(k > 0) return k % 10 + digitSum(Math.floor(k / 10));
	else if (k == 0) return 0;
	else return -1;
}

console.log(digitSum(parseInt(prompt("Enter k: "))));