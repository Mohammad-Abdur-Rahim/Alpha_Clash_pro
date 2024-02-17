function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//2nd part  fn----------
function setBackgroundColor(elementId) {
    const color = document.getElementById(elementId);
    color.classList.add('bg-orange-400');
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
}
//Alphaa Clash II Project code start heree ------------------------------------------------


document.addEventListener('keyup',function userInput(event){
    const userInput= event.key;
    const userInputFinal =userInput.toUpperCase(); //user input  store here
    
    // Display Input store here
    const showAlphabat = document.getElementById('showAlphabat');
    const displayOutput=showAlphabat.innerText;
    console.log(displayOutput,userInputFinal); //user and display input show here

    //Check User Input and Display Input matched-----
    if(userInputFinal==displayOutput){
        console.log("Matched keyword");
    }else{
        console.log("Not matched keyword");
    }
})
