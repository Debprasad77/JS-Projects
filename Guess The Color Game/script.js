const colorCode = document.getElementById("color-code")
const optionsContainer = document.getElementById("options-container")
const scoreContainer = document.getElementById("score")
let randomcolor = null;
let score=0;

function generateRanomNumberBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
}

function generateRandomColorRGB() {
    const red = generateRanomNumberBetween(0, 255)
    const green = generateRanomNumberBetween(0, 255)
    const blue = generateRanomNumberBetween(0, 255)

    return `rgb(${red}, ${green}, ${blue})`
}

function incrementScore(){
    score+=1;
    scoreContainer.innerText=score
}
function validateResult(el) {
    // console.log(el.target)
    const selectColor = el.target.style.backgroundColor;
    if(selectColor === randomcolor){
        incrementScore()
    }else{
        score=0;
    }
    window.localStorage.setItem('score',score)
    startGame();
}

function startGame() {

    score= Number(window.localStorage.getItem("score")) ?? 0
    scoreContainer.innerText=score

    optionsContainer.innerHTML =null;

    randomcolor = generateRandomColorRGB()
    colorCode.innerText = randomcolor;

    const ansIndex = generateRanomNumberBetween(0, 5)

    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");

        //click to validate result
        div.addEventListener('click', validateResult);

        div.style.backgroundColor = 
        ( i === ansIndex) ? randomcolor : generateRandomColorRGB();

        optionsContainer.append(div);


    }


}

window.addEventListener('load', () => {
    startGame();
})



