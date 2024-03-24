const EventEmitter = require("./emitter");

class MyGreeter extends EventEmitter {
  constructor() {
    super();
  }

  // similar to prototype greet methid
  greet() {
    console.log("Class Greet method");
    this.trigger("change");
  }
}

const myGreeter = new MyGreeter();
myGreeter.on("change", () => {
  console.log("My Greeter change Event 1");
});
myGreeter.greet();
