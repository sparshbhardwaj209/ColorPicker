var score = 0;
var chosenColor;
var isDone = false;
updateScoreElement();
resetGame();

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

function resetGame(){
    isDone = false;
    let counter = 0;
    var boxes = document.getElementsByClassName('box');
    var colors = createColorsArray();
    
    var colorDisplay = document.getElementById('color-display');
    chosenColor = Math.floor(Math.random() * 6);
    colorDisplay.innerText = colors[chosenColor];
    
    for(let box of boxes){
        let bgColor = colors[counter];
        box.style.backgroundColor = bgColor;
        box.removeEventListener('click', handleBoxClick);
        box.addEventListener('click', handleBoxClick);
        box.id = counter++;
    }
}

function handleBoxClick(e){
    // console.log(e.target)
    checkCorrect(e.target.id, chosenColor)
}

function checkCorrect(id, chosenColor){
    // console.log(id, chosenColor)
    if(id == chosenColor && isDone != true){
        score+=1;
        updateScoreElement();
        isDone = true;
        window.alert('Correct Answer! Click Reset button to play again');
    }else{
        if(isDone){
            window.alert('Click Reset button to play again');
        }else{
            window.alert('Wrong Answer! Try Again');
        }
    }
}

function createColorsArray(){
    let colors = [];
    for(let i =0; i<6; i++){
        let rgb = 'rgb(' + Math.floor(Math.random() * 255)+ ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) +')'; 
        colors.push(rgb);
    }
    return colors;
}

function updateScoreElement(){
    var scoreElement  = document.getElementById('score');
    scoreElement.innerText = score;
}