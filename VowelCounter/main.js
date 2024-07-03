// global variables

let vowelCnt = 0;
let text;

//Dom Elements
let inputText = document.querySelector("#sentence");
const countBtn = document.querySelector("#cntBtn");
let res = document.querySelector("#Result");



inputText.addEventListener("keyup", findSentence);
countBtn.addEventListener("click",countVowel);


function findSentence() {
    setResult(vowelCnt);
    text = inputText.value;
    // console.log(text);
    // console.log(text.length);
}

function countVowel() {
    for(let i = 0; i < text.length; i++) {
        if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u' || text[i] == 'A' || text[i] == 'E' || text[i] == 'I' || text[i] == 'O' || text[i] == 'U') {
            vowelCnt++;
        }
    }
    console.log(vowelCnt);
    setResult(vowelCnt);
}

function setResult(vwlcnt) {
    res.textContent = `Vowel Count: ${vwlcnt}`;
    vowelCnt = 0;
}