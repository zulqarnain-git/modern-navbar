let isUserLoggedIn = false;

const navLogin = document.getElementById('navLogin');
const navFreeRegistration = document.getElementById('navFreeRegistration');
const navSubscribe = document.getElementById('navSubscribe'); 
const navMyAccount = document.getElementById('navMyAccount');
const navLogout = document.getElementById('navLogout');

// Function to update the navbar based on login state
function updateNavbarForLoginState() {
  if (isUserLoggedIn) {
    // User is logged in: Show My Account & Logout, Hide Login & Free Registration
    navLogin.classList.add('d-none');
    navFreeRegistration.classList.add('d-none');

    navMyAccount.classList.remove('d-none');
    navLogout.classList.remove('d-none');
  } else {
    // User is logged out: Show Login & Free Registration, Hide My Account & Logout
    navLogin.classList.remove('d-none');
    navFreeRegistration.classList.remove('d-none');

    navMyAccount.classList.add('d-none');
    navLogout.classList.add('d-none');
  }
}

// --- Event Listeners for Login/Logout (Simulation) ---
if (navLogin) {
  navLogin.querySelector('button').addEventListener('click', () => {
    isUserLoggedIn = true;
    updateNavbarForLoginState();
    console.log('User logged in (simulated)');
    // In a real app, this would likely redirect to a login page or open a modal
  });
}

if (navLogout) {
  navLogout.querySelector('button').addEventListener('click', () => {
    isUserLoggedIn = false;
    updateNavbarForLoginState();
    console.log('User logged out (simulated)');
    // In a real app, this would clear session/token and redirect
  });
}

// --- Initial setup on page load ---
document.addEventListener('DOMContentLoaded', () => {
  updateNavbarForLoginState(); // Set initial button visibility

  // For demonstration: A button to toggle login state
  const toggleLoginButton = document.createElement('button');
  toggleLoginButton.textContent = 'Toggle Login State (Demo)';
  toggleLoginButton.classList.add(
    'btn',
    'btn-info',
    'position-fixed',
    'bottom-0',
    'end-0',
    'm-3'
  );
  toggleLoginButton.style.zIndex = '1050'; 
  toggleLoginButton.onclick = () => {
    isUserLoggedIn = !isUserLoggedIn;
    updateNavbarForLoginState();
    console.log('Login state toggled. Logged in: ' + isUserLoggedIn);
  };
  document.body.appendChild(toggleLoginButton);
  console.log('Navbar script loaded. Initial login state: ' + isUserLoggedIn);
});