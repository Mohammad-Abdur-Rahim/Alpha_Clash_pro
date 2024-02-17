function hideElement(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElement(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}


function getRandomAlphabat(){
    //create random alphabat
    const alphabatString='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphbatArray = alphabatString.split('');
  
    //create random alphabat
    const randomNumber =Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabat = alphbatArray[index];
    console.log(index,alphabat);
}
