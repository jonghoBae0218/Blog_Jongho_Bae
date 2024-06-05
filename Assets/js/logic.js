// Color change feature
// 
//





const buttonInput = document.querySelector("#darkmodeIcon");
// const buttonInput = document.querySelector("#darkmodeIcon");



buttonInput.addEventListener('click', myFunction);

function myFunction() {
    const boxElement = document.querySelectorAll(".boxSelect");
    var element = document.body;
    element.classList.toggle("dark-mode");
    for(let i=0; i < boxElement.length; i++){
        boxElement[i].classList.toggle("darkbox");
        boxElement[i].classList.toggle("box");
    }
    const backButton = document.querySelector("#back-button");
    backButton.classList.toggle("darkmode-button");
    

}
