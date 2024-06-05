// Color change feature
// 
//





const buttonInput = document.querySelector("#darkmodeIcon");
const container = document.querySelector('.container');

let mode = 'light';


let initTheme = localStorage.getItem('theme') || 'light';
if(initTheme === 'light'){
  container.setAttribute('class', 'light');
  buttonInput.textContent = '☀️';
  mode = 'light';
}else{
  container.setAttribute('class', 'dark');
  mode = 'dark';
  buttonInput.textContent = '🌒';

}


// Listen for a click event on toggle switch
buttonInput.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    console.log("Entered lightmode")
    mode = 'light';
    container.setAttribute('class', 'light');
    console.log(container.getAttribute('class'))
    localStorage.setItem('theme', mode);
    buttonInput.textContent = '☀️';
    
  }
  // If mode is light, apply dark background
  else {
    console.log("Entered darkmode")

    mode = 'dark';
    container.setAttribute('class', 'dark');
    console.log(container.getAttribute('class'))
    localStorage.setItem('theme', mode);
    buttonInput.textContent = '🌒';


  }

});

