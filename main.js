const marksMass = 86;
const marksHeight = 1.59;

const johnsMass = 82;
const johnsHeight = 1.78;

// calcuation of the BMI 
let markBMI = marksMass / (marksHeight * marksHeight);
let johnsBMI = johnsMass / (johnsHeight * johnsHeight);
console.log(markBMI, johnsBMI);
let marksHigherBMI = markBMI > johnsBMI;
console.log(marksHigherBMI);


if (markBMI > johnsBMI) {
    console.log("Is Mark's BMI higher than John's? " + marksHigherBMI);
} else {
    console.log("Is john's BMI higher than Mark's? " + marksHigherBMI);
}


// let grabbingTheID = document.getElementById('challenge_answer'); 
// let inputPTag = document.createElement('div');

// inputPTag.innerHTML = 'Is Mark\'s BMI higher than John\'s? + marksHigherBMI ';

// grabbingTheID.insertAdjacentHTML('afterend', '<div id="answer_input">"Is Mark\'s BMI higher than John\'s?  + marksHigherBMI </div>');

// grabbingTheID.insertAdjacentHTML('afterend', inputPTag);



const grabbingTheID = document.querySelector('#challenge_answer');
const inputPTag = document.createElement('p');

inputPTag.innerText = 'Is Mark\'s BMI higher than John\'s? ' + marksHigherBMI.toString();
grabbingTheID.insertAdjacentHTML('beforeend', inputPTag.outerHTML);

// add working out 
const grabbingTheIDs = document.querySelector('#workingOut');
const inputP = document.createElement('p');

inputP.innerText = 'Is Mark\'s BMI higher than John\'s? ' + marksHigherBMI.toString();
grabbingTheIDs.insertAdjacentHTML('beforeend', inputP.outerHTML);

//     fetch(index.js)
//     .then(response => response.text())
//     .then(data => {
//       document.body.insertAdjacentHTML("afterend", data);
//     });

//  second Challenge 

// John's team scored 89, 120 and 103 points = Mike's team scored 116, 94 and 123 points

let mikesAverageScore =(116+94+123)/3;
console.log(mikesAverageScore);
let johnsAverageScore =Math.floor((89+ 120+ 103)/3);
// console.log(Math.float(johnsAverageScore));
console.log(Math.floor(johnsAverageScore));
let maryAverageScore =(97+134 +105)/3;
console.log(maryAverageScore);


// Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

let winner = mikesAverageScore > johnsAverageScore;
console.log(winner);

if (mikesAverageScore > johnsAverageScore && mikesAverageScore > maryAverageScore) {
    console.log('Mike\s this the '+ winner +' winner with the higest avarage score of ' +mikesAverageScore);

} else if(johnsAverageScore > mikesAverageScore && johnsHeight > maryAverageScore){
    console.log('John\s this the '+ winner +' winner with the higest avarage score');  
    
} else {
    console.log('Marys the winner');
}
