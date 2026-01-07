const user = {name:"Satvik",email:"satvik.gaur12@gmail.com" , phone: 1234567890};
// methods of object

// const userName = user.name;
// const email = user.email;
// console.log(userName);
// console.log(email);

const {name , email , phone} = user;
// console.log(name);
// console.log(email);
// console.log(phone);
const user1=user;
user1.name="Satvik Gaur";
console.log(user);
// const updateUser = {...user , address:"mathura"}
// console.log(updateUser);