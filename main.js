var englishMarks = 39;
var urduMarks = 40;
var percentage = (englishMarks + urduMarks) / 200 * 100;
var grade;
if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 50) {
    grade = "D";
}
else {
    grade = "Fail";
}
console.log("Your grade is ".concat(grade));
console.log("Your Percentage is ".concat(percentage, "%"));
