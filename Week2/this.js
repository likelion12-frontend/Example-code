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

console.log(user.display1()); // name:user01 age:20
console.log(user.display2()); // name:undefined age:undefined