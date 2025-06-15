// Types of OBJECTS
// REFRENCE TYPE
var object1 = { value: 10 };
var object2 = object1; // refrence object1
var object3 = { value: 10 }; // makes a new

console.log(object1 === object2); // true
console.log(object1 === object3); // false
console.log([] === []); // false

// CONTEXT vs SCOPE
function b() {
  let a = 10;
  console.log(this);
}

const object4 = {
  a: function () {
    console.log(this);
  },
};

object4.a();

// INSTANTIATION
class Player {
  constructor(name, type) {
    console.log("wizard", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

// const player1 = new Player("Roman", "Hunter");
// player1.introduce();

class Wizard extends Player {
  // add on top of whatever player have
  constructor(name, type) {
    super(name, type); // to have access the property of Player
    console.log("wizard", this);
  }

  play() {
    console.log(`WEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shally", "Healer");
// const wizard2 = new Wizard("Shawn", "Necromancer");

// wizard1.play();
wizard1.introduce(); // also have access to introduce method























// ES 6
// CLASSICAL INHERITANCE
// var Player2 = function (name, type) {
//   this.name = name;
//   this.type = type;
// };

// Player2.prototype.introduce = function () {
//   console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// };

// var player1 = new Player2("Shawn", "Necromancer");

// player1.play = function () {
//   console.log(`WEEEEE I'm a ${this.type}`);
// };

// console.log(player1);
