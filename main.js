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


//     fetch(index.js)
//     .then(response => response.text())
//     .then(data => {
//       document.body.insertAdjacentHTML("afterend", data);
//     });

