let englishMarks:number = 39;
let urduMarks:number = 40;

let percentage = (englishMarks+urduMarks)/200*100;

let grade;

if (percentage >= 80){
    grade = "A"
}else if (percentage >= 70){
    grade = "B"
}else if (percentage >= 60){
    grade = "C"
}else if (percentage >= 50){
    grade = "D"
}else {
    grade = "Fail"
}

console.log(`Your grade is ${grade}`);
console.log(`Your Percentage is ${percentage}%`);

