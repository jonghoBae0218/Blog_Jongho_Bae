//===================================
// DEPENDENCIES
//===================================
const submissionBody = document.getElementById("submission-body");
const backButton = document.getElementById("back-button");

//===================================
// Init settings
//===================================



// load iteration and submission array from local storage
var submissions = JSON.parse(localStorage.getItem('submissions'));
const iter = localStorage.getItem('total-submission');

//Log the json array to the console.
console.log(submissions);

//Log each data to submisisonBody
for(let i=0; i<iter ; i++ ){
    //select current sumbission object
    const currentSub = submissions[i];

    //Create a box to add each ideas and set class.
    const box = document.createElement("div");
    box.classList.add('box');
  
    
    //Create title and append to box
    const title = document.createElement('h2');
    title.textContent = currentSub.title;
    box.appendChild(title);
    
    //create content and append to box
    const content = document.createElement('p');
    content.textContent = currentSub.content;
    box.appendChild(content);

    //create author and append to box
    const author = document.createElement('h3');
    author.textContent = 'Posted by: '+ currentSub.userName;
    box.appendChild(author);

    // Append the structured box to submission body
    submissionBody.appendChild(box);
}

//===================================
// Event listeners
//===================================

//Back button
backButton.addEventListener('click', function(event){
    event.preventDefault;
    //Open index.html
    window.open('index.html',"_self");
});

