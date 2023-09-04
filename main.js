const mainPage = document.getElementById("subscribe-box");
const successPage = document.getElementById("success-message");
const subButton = document.getElementById("sub-button");
const dismissButton = document.getElementById("dismiss-message");
const invalidEmail = document.getElementById("invalid-email");
const emailInput = document.getElementById("email");
const userEmailEl = document.getElementById("user-email");

// display new page 

function subscripSubmit(){
    mainPage.style.display = "none";
    successPage.style.display = "block";
}
function dismissMess(){
    window.location.reload();
}

//invalid email

function validateEmail(emailInput){
    const mailForm = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailInput.value.match(mailForm)){
        return true;
    }else {
        return false;
    }
}

// Event listener for subscribe

subButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(validateEmail(email)) {
        
        subscripSubmit();
        
    }else {
        invalidEmail.classList.remove('hidden');
    }
})

// Event Listener for dismiss
//subButton.addEventListener("click", subscripSubmit);

dismissButton.addEventListener("click", dismissMess);

