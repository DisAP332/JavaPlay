/*
let message = 'hello'
  , age = 25
  , user = 'John';


let a = 5
  , b = 3
  , x = a + b;

console.log (x);

console.log(22+22);
console.log ('d' == 4)
    //end


const weather = 'nice'
    , weatherIntro = 'The weather today is '
    , weatherResult = `${weatherIntro}${weather}`
    ;
    console.log(weatherResult)
    ;
    //end//


const button = document.querySelector('button')
    ;

function what() {
    const name = prompt('What is your name?')
    ;
    alert(`Hello ${name}, nice to see you!`)
    ;
}

    //end//


button.addEventListener ('click', what);

const song = 'Fight the Youth'
    , score = 9
    , highestScore = 10
    , output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.}`
    ;
    console.log(output);

    //end//
console.log ( 'B' == 2 );

let hour = 11
    ;

if (hour < 10) {
    greeting = 'good day'
    ;
} else if (hour < 20) {
    greeting = 'good afternoon'
    ;
} else {
    greeting = 'good night'
    ;
}

console.log(greeting)
    ;

//end//




const myText = 'the weather is nice today'
;
const newString = myText.replace ('weather', 'temperature')
;
console.log(newString)
;

function favoriteAnimal(animal) {
    console.log(animal + ' is my favorite animal!')
}

favoriteAnimal('ardvark')
;

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable

function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
  showMessage('Ann', "What's up?"); // Ann: What's up? (**)

 //end







function ask(question, yes, no) {
    if (confirm(question)) 
    yes()
    else no()
    ;
}

function showOk() {
    alert ('you agreed.')
    ;
}

function showCancel() {
    alert ('You canceled the execution.')
    ;
}

ask("Do you agree?", showOk, showCancel)

function ask(question, yes, no) {
    if (confirm(question)) 
    yes()
    else no()
    ;
}

ask(
    "do you agree?"
    ,
    function() {alert('you agreed'); }
    ,
    function () {alert('you canceled the execution.');}
); 
*/
    /* let seven = 7
    ,   eight = 8
    ,   sum = seven + eight
    ;
    console.log (sum)
    ; */

function add7() {
    a = 7
    b = 2
    sum1 = a + b
    ;
    console.log (sum1)
}
;
function multiply() {
    a = 3
    b = 4
    sum2 = a * b
    ;
    console.log (sum2)
}
;
function addTogether() {
    sum3 = sum1 + sum2 
    ;
    console.log (sum3)
}

function capitalize() {
    string = 'capitalize'
    newString = string.charAt(0).toUpperCase() + string.slice(1)
    console.log (newString)
    }


function lastLetter() {
    string = 'abcd'
    newString = string.slice(3)
    console.log (newString)

}

lastLetter()
capitalize()
add7()
multiply()
addTogether()