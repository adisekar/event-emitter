const Emitter = require("./emitter");
const eventConfig = require("./config").event;

const emitter = new Emitter();

emitter.on(eventConfig.GREET, function ({ data }) {
  console.log("greet hello world");
  console.log(data);
});

emitter.emit(eventConfig.GREET, { data: "Hello Adi" });
