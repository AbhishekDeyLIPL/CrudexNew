// import {userArray} from './signup';
// import {authDict} from './signup';


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

// const authDict = {}
const authDict = JSON.parse(localStorage.getItem('authDict')) || {};


function goLogin() {
  const user = document.getElementById("userName").value;
  const passw = document.getElementById("password").value;

  if (user == "" || passw == ""){
    alert("Please fill all the details!")
  }
  else{
    const loginUser = localStorage.getItem("signUser");
  const loginPass = localStorage.getItem("signPass");

  authDict[loginUser] = loginPass;
  localStorage.setItem('authDict', JSON.stringify(authDict));

  if (user in authDict && authDict[user] == passw){
      window.location.href = "home.html";
  }
  else{
      alert("The password or username you have entered is incorrect");
  }
  }

  // localStorage.removeItem("signUser")
  // localStorage.removeItem("signPass")

}


