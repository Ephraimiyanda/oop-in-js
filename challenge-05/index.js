class User{
   constructor(username,password,age){
    this.username = Symbol("username");
    this.password =  Symbol("password");
    this.age = age;
   }
}
const user1 = new User("you","1234",23)
console.log(user1)