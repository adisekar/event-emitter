// const Emitter = require("./emitter");
const MyGreeter = require("./myGreeter");
const eventConfig = require("./config").event;

// const emitter = new Emitter();

const greeter = new MyGreeter();
greeter.on(eventConfig.GREET, function ({ data }) {
  console.log("greet hello world");
  data && console.log(data);
});

greeter.greet({ data: "Hello Adi" });

// emitter.on(eventConfig.GREET, function ({ data }) {
//   console.log("greet hello world");
//   console.log(data);
// });

// emitter.emit(eventConfig.GREET, { data: "Hello Adi" });
