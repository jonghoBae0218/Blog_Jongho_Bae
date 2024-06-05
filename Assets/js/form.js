const submitBtn = document.querySelector('#submit');
const userName = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const content = document.querySelector('#content-input');




submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    // console.log(userName.value);
    if(userName.value==='' || titleInput.value === '' ||  content.value.trim()===''){
        alert("Please fill in all the boxes");
        return;
    }
    const submission= {
        userName : userName.value,
        title : titleInput.value,
        content: content.value.trim(),

    };
    

    // Retrieve existing array from localStorage or create a new one if it doesn't exist
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    // Add a new element to the array
    // console.log("clicked!");
    submissions.push(submission);
    // console.log(submission);

    // Save the updated array back to localStorage
    localStorage.setItem('submissions', JSON.stringify(submissions));
    localStorage.setItem('total-submission', submissions.length);
    // console.log(submissions.length)
  

    window.open('blog.html', "_self");

})




