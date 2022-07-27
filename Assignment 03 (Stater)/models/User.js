'use strict'

// tạo Class User để đại diện cho thông tin của người dùng
class User{
    constructor(
    firstname,
    lastname,
    username,
    password,
    
    pageSize = 10,
    category = "business"
    ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;

        this.pageSize = pageSize;
        this.category = category;
    }
}