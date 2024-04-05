const user = {
    id: "user01",
    age: "20",
    display1: function () {
      return `name:${this.id} age:${this.age}`;
    },
    display2: () => {
      return `name:${this.id} age:${this.age}`;
    },
  };

console.log(user.display1()); 
console.log(user.display2()); 
// name:user01 age:20
// name:undefined age:undefined

// const a=1;
// console.log(a);

// a=2;
// console.log(a);

// let a=3;
// console.log(a);