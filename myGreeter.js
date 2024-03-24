const Emitter = require("./emitter");
const eventConfig = require("./config").event;
const { inherits } = require("util");

function MyGreeter() {
  Emitter.call(this);
  // extend using node inherits
  //   MyGreeter.prototype = Object.create(Emitter.prototype);
  //   inherits(MyGreeter, Emitter);

  MyGreeter.prototype.greet = function (data) {
    console.log("My Greeter called");
    this.emit(eventConfig.GREET, data);
  };
}

// extend using manual prototype assignment
MyGreeter.prototype = Object.create(Emitter.prototype);
MyGreeter.prototype.constructor = MyGreeter;

module.exports = MyGreeter;
