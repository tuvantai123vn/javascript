'use strict'

const loginModal = document.getElementById('login-modal');
const mainContent = document.getElementById('main-content');
const welcomeMessage = document.getElementById('welcome-message');
const btnLogout = document.getElementById('btn-logout');

displayHome();

console.log(currentUser);

function displayHome(){
    // nếu có người đăng nhập thì sẽ chuyển loginModal về none và chuyển mainContent về block và hiện firstname người dùng ở welcomeMessage
    if(currentUser){
        loginModal.style.display = 'none';
        mainContent.style.display = 'block';
        welcomeMessage.textContent = `Welcome ${currentUser.firstname} `
    }else{
        // nếu không có người đăng nhập thì sẽ chuyển loginModal về block và chuyển mainContent về none
        loginModal.style.display = 'block';
        mainContent.style.display = 'none';
    }
}

btnLogout.addEventListener('click', function(){
    // đặt một câu hỏi nếu người dùng đống ý sẽ đăng xuất
    const isLogout = confirm("Bạn có chắc muốn đăng xuất");
    if(isLogout){
        // đổi giá trị currentUser về null
        currentUser = null;
        // và lưu dữ liệu lại thông qua saveToStorage
        saveToStorage('currentUser', currentUser);
        displayHome();
    }
})