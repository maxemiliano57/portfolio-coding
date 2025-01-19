//Daniel Krupczak & Max Rivera

let userInput = prompt("Type Something:");
userInput.toLowerCase();

let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = [];
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < userInput.length; i++) {
    let char = userInput[i];

    if (/[a-z]/.test(char)) {

        if (vowels.includes(char)) {
            vowelCount++;
        }
        else {
            consonantCount++;
        }
    }
}

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);
