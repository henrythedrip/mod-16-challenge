// const { response } = require("express");

console.log('hi this should work please');
const loginFormHandler = async (event) => {

    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  
    console.log(email, password);

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

//   ----------------------------

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#create-account-name').value.trim();
    const email = document.querySelector('#create-account-email').value.trim();
    const password = document.querySelector('#create-account-password').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-drip')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.create-account-drip')
    .addEventListener('submit', signupFormHandler);
  
// DEBUG: add logout button that is NOT conditional
const debugLogoutHandler = async event => {
  await fetch('/logout', {
    method: 'POST'
  });
  if (response.ok) {
    document.location.replace('/login')
  } else {
    alert('failed to logout');
  }
}

document
  .querySelector('#debug-logout-button')
  .addEventListener('click', debugLogoutHandler)