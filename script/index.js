// JavaScript page/Section Linking way programe----------------

function continueGame() {
    const alphabt = getRandomAlphabat();
    console.log("Your alphabat is : ", alphabt);
    //display random alphabat here
    const show = document.getElementById('showAlphabat');
    show.innerText = alphabt;
    //set bg colore
    setBackgroundColor(alphabt);

};

function play() {
    hideElement('home');
    hideElement('scorePage');
    showElement('playground');
    setInnerText('life-number',5);
    setInnerText('current-score',0);
    continueGame();
    
}
function gameOver(){
    hideElement('playground');
    showElement('scorePage');
    const result =userInputValue('current-score');
    setInnerText('finalLastScore',result);

}