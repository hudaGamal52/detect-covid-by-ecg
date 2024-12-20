document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    // Form validation

    var isValid = validateForm();
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
      return;
    }


  });
function validateForm() {
  var isValid = true;

  var phone = document.getElementById("phone").value;
  if (!/^[0-9]*$/.test(phone)) {
    isValid = false;
    alert("Phone number must consist of numbers.");
  }

  var email = document.getElementById("email").value;
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    isValid = false;
    alert("Invalid Email Address.");
  }

  var pwd = document.getElementById("pwd").value;
  var confirmPwd = document.getElementById("confirm").value;
  if (pwd !== confirmPwd) {
    isValid = false;
    alert("Confirm Password does not match");
  }
  return isValid;
}
