const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const userInput = document.getElementById("user-input");
const errorMessage = document.getElementById("error-message");
const mainPage = document.getElementById("main-page");
const successPage = document.getElementById("success-page");
const dismissBtn = document.getElementById("dismiss-btn");
const confirmMsg = document.getElementById("confirm-msg");
const illustration = document.getElementById("illustration");


const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
}

function updateIllustration () {
    if (window.innerWidth >= 850) {
        illustration.src = './assets/images/illustration-sign-up-desktop.svg';
    }
    else {
        illustration.src = './assets/images/illustration-sign-up-mobile.svg';
    }
}

window.addEventListener('resize', updateIllustration);

form.addEventListener('submit',handleSubmit);

submitBtn.addEventListener("click", () => {
    if (userInput.validity.typeMismatch || userInput.validity.valueMissing) {
        errorMessage.style.display = "block";
    }
    else {
        errorMessage.style.display = "none";
        mainPage.style.display = "none";
        confirmMsg.innerHTML = `A confirmation email has been sent to <b>${userInput.value}</b>. 
        Please open it and click the button inside to confirm your subscription.`
        successPage.style.display = "flex";
    }
})

dismissBtn.addEventListener("click",() => {
    mainPage.style.display = "flex";
    successPage.style.display = "none";
    form.reset();}
)