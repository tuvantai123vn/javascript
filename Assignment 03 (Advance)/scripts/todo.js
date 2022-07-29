'use strict'

if(currentUser){
    const todoList = document.getElementById('todo-list');
    const btnAdd = document.getElementById('btn-add');
    const inputTask = document.getElementById('input-task');

    displayTodoList();

    function displayTodoList(){
        // lọc ra các task để hiển thị lên trang
        let html = '';
        todoArr.filter((todo) => todo.owner === currentUser.username).forEach(function(todo){
            html +=`
            <li class=${todo.isDone ? 'checked' : ''}>${todo.task}<span class="close">×</span></li>
            `
        })
        todoList.innerHTML = html;
        eventToggleTask();
        evenDeleteTask();
    }

    btnAdd.addEventListener('click', function(){
        if(inputTask.value === ''){
            alert('Vui lòng nhập nhiệm vụ')
        }else{
            const todo = new Task(inputTask.value, currentUser.username, false);

            todoArr.push(todo);

            saveToStorage('todoArr', todoArr);
            displayTodoList();
            inputTask.value = '';
        }
    })
    function eventToggleTask(){
        // lấy tất cả thẻ li chứa thông tin của task và bắt sự kiện click
        document.querySelectorAll('#todo-list li').forEach(function(LiEl){
            LiEl.addEventListener('click', function(e){
                // để tránh đề trùng sự kiện
                if(e.target !== LiEl.children[0]){
                    // toggle class checked
                    LiEl.classList.toggle('checked');
                    // tìm ra task vừa click
                    const todo = todoArr.find((todoItem) => {
                        todoItem.owner === currentUser.username && todoItem.task === LiEl.textContent.slice(0, -1)
                        // lấy nội dung chứa trong task, loại bỏ x
                    })
                // thay đổi thuộc tính isDone
                    todo.isDone = LiEl.classList.contains('checked') ? true : false;
                    saveToStorage('todoArr', todoArr);
                }
            })
        })
    }
    function evenDeleteTask(){
        // lấy tất cả nut delete bắt sự kiện click
        document.querySelectorAll('#todo-list .close').forEach(function(closeEl){
            closeEl.addEventListener('click', function(){
                const isDelete = confirm('Bạn có chắc muốn xóa');
                if(isDelete){
                    // tìm vị trí task được ẩn xóa trong todoArr
                    const index = todoArr.findIndex((item) => {
                        // xác định vị trí user và tên task
                        item.owner === currentUser.username && 
                        // xác định task so sánh
                        item.task === closeEl.parentElement.textContent.slice(0, 1) 
                    })
                    // xóa task
                    todoArr.splice(index-1, 1);
                    // cập nhật lại dữ liệu
                    saveToStorage('todoArr', todoArr);
                    // render lại dữ liệu
                    displayTodoList();
                }
        })
    })}
}else{
    alert('Vui lòng đăng nhập hoặc đăng ký nếu chưa có tài khoản');
    window.location.href = '../index.html';
}
