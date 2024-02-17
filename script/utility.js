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
