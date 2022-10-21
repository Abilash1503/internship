const regForm = document.getElementById("login-form");
const regButton = document.getElementById("login-form-submit");
const regErrorMsg = document.getElementById("login-error-msg");

regButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = regForm.name.value;
    const email  = regForm.email.value;
    const password = regForm.password.value;
    const cpassword = regForm.cpassword.value;
    if (name != null && email != null && password != null && cpassword != null ) {
        alert("You have successfully registered.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})