//===================================
// DEPENDENCIES
//===================================

const submitBtn = document.querySelector('#submit');
const userName = document.querySelector('#username-input');
const titleInput = document.querySelector('#title-input');
const content = document.querySelector('#content-input');



//===================================
// Event listeners
//===================================

// When submitting a form
submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    // Do not accept input when any of the three value is empty.
    if(userName.value==='' || titleInput.value === '' ||  content.value.trim()===''){
        alert("Please fill in all the boxes");
        return;
    }

    //Make submisison object
    const submission= {
        userName : userName.value,
        title : titleInput.value,
        content: content.value.trim(),

    };
    

    // Retrieve existing array from localStorage or create a new one if it doesn't exist
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    // Add a new element to the array
    submissions.push(submission);

    // Save the updated array back to localStorage
    localStorage.setItem('submissions', JSON.stringify(submissions));
    //Save the number of submissions for iteration)
    localStorage.setItem('total-submission', submissions.length);
    
    //Open blog page
    window.open('blog.html', "_self");

})




