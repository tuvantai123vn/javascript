'use strict'

const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const btnSunmit = document.getElementById('btn-submit');

btnSunmit.addEventListener('click', function(){
    const isValidate = validate();
    if(isValidate){
        // nếu thỏa mản validate thì người sẽ kiểm tra username và Password cử người dùng xem có đúng hay chưa
       const user = userArr.find((item) => 
       item.username === inputUsername.value && item.password == inputPassword.value
       );
       if(user){
        alert('Đăng nhập thành công');
        // Lấy dữ liệu lưu vào localstorage
        saveToStorage('currentUser', user);
        // chuyển hướng sang trang index
    window.location.href = '../index.html';
    }else{
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }
    }  
})

function validate(){
    // check
    let isValidate = true;
    // kiểm tra đã nhập đủ username và password chưa
    if(inputUsername  === ''){
        alert('Vui lòng nhập lại username');
        isValidate = false;
    }
    if(inputPassword  === ''){
        alert('Vui lòng nhập lại ');
        isValidate = false;
    }
    return isValidate;
}