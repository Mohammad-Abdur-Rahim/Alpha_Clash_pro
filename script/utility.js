function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

};
function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
};
//2nd part  fn----------
function setBackgroundColor(elementId) {
    const color = document.getElementById(elementId);
    color.classList.add('bg-orange-400');
};
function removeBg(elementId) {
    const color = document.getElementById(elementId);
    color.classList.remove('bg-orange-400');
};
//-------------------------new +++ -----------------
function userInputValue(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const elementValue=parseInt(elementValueText);
    return elementValue;
}
function setInnerText(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText=value;

}

//1st part  fn------------------------------------------------------------
function getRandomAlphabat() {
    //create random alphabat
    const alphabatString = 'abcdefghijklmnopqrstuvwxyz';
    const alphbatArray = alphabatString.split('');

    //create random alphabat
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabat = alphbatArray[index];
    return alphabat;
};
//Alphaa Clash II Project code start heree ------------------------------------------------


document.addEventListener('keyup',function userInput(event){
    const userInput= event.key;
    const userInputFinal =userInput.toUpperCase(); //user input  store here

    // Display Input store here
    const showAlphabat = document.getElementById('showAlphabat');
    const displayOutput=showAlphabat.innerText;
    console.log(displayOutput,userInputFinal); //user and display input show here

    //Check User Input and Display Input matched-----
    if(userInputFinal===displayOutput){
        //update score function start -------------------------------------
        const currentScore=userInputValue('current-score');
        const newScore= currentScore+1;
        setInnerText('current-score',newScore);
        // currentScore.innerText=newScore;

       //new round fn
        continueGame();
    }
    else{
        console.log("Not matched keyword");
        //score life function-------------------------------
        const remainLife=userInputValue('life-number');
           const finalLife=remainLife-1;
           setInnerText('life-number',finalLife);

    }
});
