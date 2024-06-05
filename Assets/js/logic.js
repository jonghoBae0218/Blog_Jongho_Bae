//===================================

//DEPENDENCIES
//===================================


const buttonInput = document.querySelector("#darkmodeIcon");
const container = document.querySelector('.container');

//===================================
//Init settings
//===================================

//Default mode = light;
let mode = 'light';


//If theme is stored, bring that. if not, set it as light
let initTheme = localStorage.getItem('theme') || 'light';

// This is for dark / light mode to pass on to the othe page. Activates when page is loaded.
// If previous page was light mode, set it accordingly
if(initTheme === 'light'){
  container.setAttribute('class', 'light');
  buttonInput.textContent = '☀️';
  mode = 'light';
}else{ // If it was dark mode, set it accordingly
  container.setAttribute('class', 'dark');
  mode = 'dark';
  buttonInput.textContent = '🌒';
}



//===================================
// Event listeners
//===================================

// Listen for a click event on toggle switch
buttonInput.addEventListener('click', function () {
  // If mode is dark, apply light setting
  if (mode === 'dark') {
    mode = 'light';
    // Change class from dark to light to get styles from .light ...
    container.setAttribute('class', 'light');
    //Remember current theme in case of moving to other page
    localStorage.setItem('theme', mode);
    //Change button image
    buttonInput.textContent = '☀️';
    
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    // Change class from light to dark to get styles from .dark ...
    container.setAttribute('class', 'dark');
    // Remember current theme in case of moving to other page
    localStorage.setItem('theme', mode);
    //change button image
    buttonInput.textContent = '🌒';


  }

});

