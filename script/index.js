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
    showElement('playground');
    continueGame();

}