function togglePassword() {

  const passwordInput = document.getElementById('password');
  const toggleIcon = document.querySelector('.toggle-password i');

  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  if (type === 'text') {
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
}



function goRegister() {

  const signFullName = document.getElementById("fullName").value;
  const signEmail = document.getElementById("email").value;
  const signUser = document.getElementById("signUser").value;
  const signPass = document.getElementById("password").value;

  if (signFullName == "" || signEmail == "" || signUser == "" || signPass == "") {
    alert("Please fill all the details!")
  }
  else {
    localStorage.setItem("signUser", signUser);
    localStorage.setItem("signPass", signPass);

    alert("You are successfully registered with Crudex Controls!")
    window.location.href = "login.html";
  }


}



