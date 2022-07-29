'use strict'

// tạo Class User để đại diện cho thông tin của người dùng
class User{
    constructor(
    firstname,
    lastname,
    username,
    password,
    // pageSize và category để phục vụ setting cho yêu cầu 9
    pageSize = 5,
    category = "business"
    ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        // pageSize và category để phục vụ setting cho yêu cầu 9
        this.pageSize = pageSize;
        this.category = category;
    }
}
class Task{
    constructor(task, owner, isDone){
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
}