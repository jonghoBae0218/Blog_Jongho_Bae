
const submissionBody = document.getElementById("submission-body");
const backButton = document.getElementById("back-button");

var submissions = JSON.parse(localStorage.getItem('submissions'));
const iter = localStorage.getItem('total-submission');

for(let i=0; i<iter ; i++ ){
    const currentSub = submissions[i];
    console.log(currentSub);
    const box = document.createElement("div");
    box.classList.add('box');
    box.classList.add('boxSelect');
    

    const title = document.createElement('h2');
    title.textContent = currentSub.title;
    box.appendChild(title);
    
    const content = document.createElement('p');
    content.textContent = currentSub.content;
    box.appendChild(content);

    const author = document.createElement('h3');
    author.textContent = 'Posted by: '+ currentSub.userName;
    box.appendChild(author);

    submissionBody.appendChild(box);
}


//Back button
backButton.addEventListener('click', function(event){
    event.preventDefault;
    console.log("Hi")
    window.open('index.html',"_self");
});

