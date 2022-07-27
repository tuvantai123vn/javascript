'use strict'
// save to storage : key, value deu phai la string
// tạo hàm để lưu vào localstorage
function saveToStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  // lấy dữ liệu từ LocalStorage
  function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
//  lay du kieu userarr tu localstorage
const users = getFromStorage('userArr') ? getFromStorage('userArr') : [];

// chuyển đổi từ class về instance sẽ trả về một mảng instace chưa user
const userArr = users.map((user) => parseUser(user));

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