'use strict'
// save to storage : key, value deu phai la string
//  lấy dữ liệu từ LocalStorage
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
//tạo hàm để lưu vào localstorage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
//  lay du kieu userarr tu localstorage
const users = getFromStorage('userArr') ? getFromStorage('userArr') : [];
// console.log(users);

// chuyển đổi từ class về instance sẽ trả về một mảng instace chưa user
const userArr = users.map((user) => parseUser(user));
// console.log(userArr);

// hàm chuyển đổi từ class về instance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    // Thêm 2 thuộc tính thay đổi thiết lập
    userData.pageSize,
    userData.category
  )
  return user
}

// Lấy dữ liệu user đăng nhập
let currentUser = getFromStorage('currentUser') ? parseUser(getFromStorage('currentUser')) : null;

//  lay du kieu userarr tu localstorage
const todos = getFromStorage('todoArr') ? getFromStorage('todoArr') : [];
console.log(users);
// chuyển đổi từ class về instance sẽ trả về một mảng instace chưa user
const todoArr = todos.map((todo) => parseTask(todo));
// hàm chuyển đổi từ class về instance
function parseTask(taskData) {
  const task = new Task(
    taskData.task,
    taskData.owner,
    taskData.isDone,
  )
  return task;
}