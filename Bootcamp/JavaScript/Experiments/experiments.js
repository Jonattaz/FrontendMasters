const monthylRent = 500;
const firstName = "Jonatas";
const lastName = "Santos";
const yearlyRent = monthylRent * 12;
const sentence = `Hello ${firstName} ${lastName} How are you!?`;
const isTheSkyBlue = true;
const num = 5000;
let infityStones = 0;
let fullCounter = 0;

console.log(yearlyRent);
console.log(sentence);
console.log(num);

if (isTheSkyBlue) {
    console.log("The sky is blue!");
} else {
    console.log("The sky is... not blue?");
}

// Triple equals - Just works with the same type
// Double equals - Has coercion which make the code work like this "4"(string four) equal 4(number)
// One equal - is assigned

if (2 + 2 === 4) {
    console.log("All hail Jonatas");
} else {
    console.log("I feel an imbalance in the force")
}

while (infityStones <= 6) {

    if (infityStones === 0) {
        console.log("Damn it how am I gonna bring peace to the Universe");
    } else if (infityStones === 3) {
        console.log("Half is already mine")
    } else if (infityStones === 6) {
        console.log("Now I shall start my plan");
    }

    infityStones++;

}
console.log("I acquired " + --infityStones + " infinity stones");
for (let counter = 0; counter < 11; counter++) {
    fullCounter++;
    console.log(fullCounter + " universe(s) pacified");
}

function emperor(){
   return console.log("Welcome back God Emperor Jonatas!");
}

emperor();










