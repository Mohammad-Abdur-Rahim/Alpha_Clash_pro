// JavaScript page/Section Linking way programe----------------

function continueGame() {
    const alphabt = getRandomAlphabat();
    console.log("Your alphabat is : ", alphabt);
};

function play() {
    hideElement('home');
    showElement('playground');
    continueGame();

}