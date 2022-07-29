'use strict'

if(currentUser){
    const inputPageSize = document.getElementById('input-page-size');
    const inputCategory = document.getElementById('input-category');
    const btnSubmit = document.getElementById('btn-submit');

    btnSubmit.addEventListener('click', function(){
        if(validate()){
            currentUser.pageSize = Number.parseInt(inputPageSize.value);
        currentUser.category = inputCategory.value;
        saveToStorage('currentUser', currentUser);

        const index = userArr.findIndex((userItem) => userItem.username ===currentUser.username);
        userArr[index] = currentUser;
        saveToStorage('userArr', userArr);

        alert('Cài đặt thành công');
        inputPageSize.value = '';
        inputCategory.value = 'General';
        }
        
    })
    function validate(){
        let isValidate = true;
        if(Number.isNaN(Number.parseInt(inputPageSize.value))){
            alert('News per page khoong hợp lệ')
            isValidate = false;
        }
        if(inputCategory.validate === ''){
            alert('Vui lòng chọn category');
            isValidate = false;
        }
        return isValidate
    }


}else{
    alert('Vui lòng đăng nhập hoặc đăng ký nếu chưa có tài khoản');
    window.location.href = '../index.html';
}
