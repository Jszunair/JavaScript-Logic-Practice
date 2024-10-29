// ForEach
// const names = ['Abdullah', 'Ahmed', 'Ali', 'Mehmood', 'Nabeel'];

// names.forEach(function(value){
//     console.log(value + ' ji')
// })

// Map new array will be added but the original one will be the same you can manupilate or change the newest one,

// let names = ['Abdullah', 'Ahmed', 'Ali', 'Mehmood', 'Nabeel'];
//   let newArr =names.map(function(value){
//     return value + ' kese ho'
//   })

//   console.log(newArr)

// Filter in order to use it, always return a boolean value, if u want your new array to be added with the original array, original array will be the same but the new one you can filter out things with it, 

// let names = ['Abdullah', 'Ahmed', 'Ali', 'Mehmood', 'Nabeel'];

// let newArr = names.filter(function(value){

// if(value.startsWith ('A')){
//     return true;
//     console.log(value)
// } 

// })
// console.log(newArr)


// Destructure

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     gender: 'Male',
//     email: 'johndoe@example.com',
//     hobbies: ['reading', 'traveling', 'swimming'],
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY',
//         zipCode: '10001'
//     }
// };

// Destructring an array

// let [first]= person.hobbies
// console.log(first)

// Destructring an object

// let {zipCode}= person.address;
// console.log(zipCode)

// if you want to use a value in an object or in an array several Times, you may use it like person.address.zipCode, for array person.hobbies[0],it will be a headache and many lines of code you have to Write. to save our time we destructure the object with this formula that i just used, 

// ...rest and spread operators 

// let names = ['Abdullah', 'Ahmed', 'Ali', 'Mehmood', 'Nabeel'];

// let newArr = [...names];
// newArr.push('Umer')
// console.log(newArr) 

// function abcd (a,b,c,...chacha){
//     console.log(a,b,c,chacha)
// } 
// abcd(1,2,3,4,5,6)