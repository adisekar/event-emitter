function Emitter() {
  this.events = {};

  Emitter.prototype.on = function (type, listener) {
    // if undefined
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(listener);
  };

  Emitter.prototype.emit = function (type, data) {
    const listeners = this.events[type];
    listeners && listeners.forEach((item) => item(data));
  };
}

module.exports = Emitter;
