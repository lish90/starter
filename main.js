const marksMass = 86;
const marksHeight = 1.59;

const johnsMass = 82;
const johnsHeight = 1.78;


let markBMI = marksMass / (marksHeight * marksHeight);
let johnsBMI = johnsMass / (johnsHeight * johnsHeight);
console.log(markBMI);
console.log(marksMass);
console.log(johnsBMI);
if (markBMI > johnsBMI) {
    console.log("Is Mark's BMI higher than John's?");
} else {
    console.log("Is john's BMI higher than Mark's?");
}



//  mass / height^2 = mass / (height * height). 
// (mass in kg and height in meter)
// var BMIMark = massMark / (heightMark * heightMark);