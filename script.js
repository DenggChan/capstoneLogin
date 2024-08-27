document.addEventListener('DOMContentLoaded', function() {
    document.body.style.zoom = "110%";
});

document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navlist');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

document.getElementById('loginBtn').addEventListener('click', function() {
        window.location.href = 'home.html'; // Navigate to home.html
});
    

 // Password toggle functionality
 const togglePassword = document.querySelector('#togglePassword');
 const passwordInput = document.querySelector('#password');

 togglePassword.addEventListener('click', function() {
     const type = passwordInput.type === 'password' ? 'text' : 'password';
     passwordInput.type = type;
     this.classList.toggle('bxs-hide', type === 'password');
     this.classList.toggle('bxs-show', type === 'text');
 });


});

