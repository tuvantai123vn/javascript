'use strict'

const loginModal = document.getElementById('login-modal');
const mainContent = document.getElementById('main-content');
const welcomeMessage = document.getElementById('welcome-message');
const btnLogout = document.getElementById('btn-logout');

displayHome();


function displayHome(){
    if(currentUser){
        loginModal.style.display = 'none';
        mainContent.style.display = 'block';
        welcomeMessage.textContent = `Welcome ${currentUser.firstName} `
    }else{
        loginModal.style.display = 'block';
        mainContent.style.display = 'none';
    }
   
}