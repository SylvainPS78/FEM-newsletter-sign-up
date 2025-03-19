const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const userInput = document.getElementById("user-input");
const errorMessage = document.getElementById("error-message");

const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
}

form.addEventListener('submit',handleSubmit);

submitBtn.addEventListener("click", (e) => {
    if (userInput.validity.typeMismatch || userInput.validity.valueMissing) {
        errorMessage.style.display = "block";
    }
    else {
        errorMessage.style.display = "none";
    }
})



// :valid ?
// :user-valid ?


// :invalid ?
// :user-invalid ?

//typeMismatch: Returns true if the value is not in the required syntax (when type is email)
//  or false if the syntax is correct. 
// If true, the element matches the :invalid CSS pseudo-class.

//valid: Returns true if the element meets all its validation constraints, and is therefore considered to be valid, or false if it fails any constraint. 
// If true, the element matches the :valid CSS pseudo-class; the :invalid CSS pseudo-class otherwise.

//valueMissing: Returns true if the element has a required attribute, but no value, or false otherwise.
// If true, the element matches the :invalid CSS pseudo-class.

//checkValidity(): Returns true if the element's value has no validity problems; false otherwise. 
// If the element is invalid, this method also fires an invalid event on the element.

//reportValidity(): Reports invalid field(s) using events. 
// This method is useful in combination with preventDefault() in an onSubmit event handler.

//setCustomValidity(message): Adds a custom error message to the element; if you set a custom error message, 
// the element is considered to be invalid, and the specified error is displayed. 
// This lets you use JavaScript code to establish a validation failure other than those offered by the standard HTML validation constraints. 
// The message is shown to the user when reporting the problem.