/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
          // Switch to text
          input.type = 'text'
 
          // Icon change
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          // Change to password
          input.type = 'password'
 
          // Icon change
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('login-pass','login-eye')

// Email Address Validation
var email = document.getElementById("email");
var emailValidation = function () {
  emailValue = email.value.trim();
  validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailError = document.getElementById("email_error");
  if (emailValue == "") {
    emailError.innerHTML = "**Email Address is required";
  } else if (!validEmail.test(emailValue)) {
    emailError.innerHTML = "**Invalid Email Address";
  } else {
    emailError.innerHTML = "";
    return true;
  }
};
email.oninput = function () {
  emailValidation();
};
