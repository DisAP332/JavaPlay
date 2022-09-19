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