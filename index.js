/*//Question 1
let User = {
  name: prompt('Enter your name:'),
  email: prompt('Enter your email:'),
  password: prompt('Enter your password:')

};

Object.values(User).map(value => {});
Object.keys(User).map(key => console.log(key,":",User[key]));

 
//Question 2
let Person = {
  address: prompt ('Enter your address:'),
  phoneNumber: prompt ('Enter your phone number:')
};

const userData = {...User, ...Person};
console.log(userData);

//Question 3
let user = {
  name: prompt ('Enter your name:'),
  email: prompt ('Enter your email:'),
  password: prompt ('Enter your password:'),
  address: prompt ('Enter your address:'),
  phoneNumber:prompt ('Enter your phone number:')
};
const {name:na, age=24 , address:add} = user;
console.log(na);
console.log(age);
console.log(add);

//Question 4
let user = {
  name: prompt('Enter your name:'),
  age: prompt('Enter your age:'),
  email: prompt('Enter your email:'),
  password: prompt('Enter your password:'),
  phoneNumber:prompt ('Enter your phone number:'),
  get fullName() {return `${user.firstName} ${user.lastName}`}
};
console.log(user.fullName);

//Question 5
const person = [
    {name:'Ali', age:20},
    {name:'Ahmad', age:15},
    {name:'Umar', age:14},
    {name:'Abdullah', age:25}
];
const filtered = person
 .filter(person => person.age <= 18)
 .map(person => person.name);
console.log(filtered);*/



