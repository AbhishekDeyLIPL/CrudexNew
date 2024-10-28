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
  
  function goLogin() {
    const eid = document.getElementById("email").value;
    const passw = document.getElementById("password").value;
  
    if (eid === "crudexcontrols@gmail.com" && passw === "1234") {
      window.location.href = "index.html"; // Redirects to index.html
    } else {
      alert("Invalid email or password"); // Optional: show an error message if login fails
    }
  }
  