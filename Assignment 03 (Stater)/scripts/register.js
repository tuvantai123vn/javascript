'use strict'

const inputFirsname = document.getElementById('input-firstname');
const inputLastname = document.getElementById('input-lastname');
const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const inputPasswordconfirm = document.getElementById('input-password-confirm');
const btnSubmit = document.getElementById('btn-submit');

//  bắt sự kiện khi nhấn vào nút submit
btnSubmit.addEventListener('click', function(){
    const user = new User(
        inputFirsname.Value,
        inputLastname.value,
        inputUsername.value,
        inputPassword.value,
    )
    const isValidate = validate(user);
    if(isValidate){
        // thêm user vào mảng userArr
        userArr.push(user);
        // Lấy dữ liệu lưu vào localstorage
        saveToStorage('userArr', userArr);
        alert('Đăng ký thành công');
        // chuyển hướng sang trang login
        window.location.href = '../pages/login.html';
    }
})
    // function kiểm tra validate
function validate(user){
    // check
    let isValidate = true;
    // Không có trường nào bị bỏ trống
    if(user.firstname  === ''){
        alert('Vui lòng nhập lại firtname');
        isValidate = false;
    }
    if(user.lastname  === ''){
        alert('Vui lòng nhập lại lastname');
        isValidate = false;
    }
    if(user.username  === ''){
        alert('Vui lòng nhập lại username');
        isValidate = false;
    }
    if(user.Password  === ''){
        alert('Vui lòng nhập lại ');
        isValidate = false;
    }
    if(user.Passwordconfirm  === ''){
        alert('Vui lòng nhập lại Password confirm');
        isValidate = false;
    }
    // Username không được trùng với Username của các người dùng trước đó
    if(!userArr.every((item) => (item.username !== user.username ? true : false))){
        alert('Username đã tồn tại');
        isValidate = false;
    }
    // Password và Confirm Password phải giống nhau
    if(inputPassword.value !== inputPasswordconfirm.value){
        alert('Password và confirm Password phải trùng nhau');
        isValidate = false;
    }
    // kiểm tra password phải lớn hơn 8 ký tự
    if(user.password.length <= 8){
        alert('Password phải nhiều hơn 8 ký tự');
        isValidate = false;
    }
    return isValidate;
}