// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//   document.querySelector('#logout').addEventListener('click', logout);
  

  console.log('smoke test from debug.js');

// DEBUG: add logout button that is NOT conditional
const LogoutHandler = async event => {
  const response = await fetch('/api/logout', {
    method: 'POST'
  });

  if (response.ok) {
    document.location.replace('/login')
  } else {
    alert('failed to logout');
  }
}

document
  .querySelector('#logout')
  .addEventListener('click', LogoutHandler)