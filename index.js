class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    trigger(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => {
                cb();
            });
        } else {
            console.log('No event exists')
        }
    }
}

let ee = new EventEmitter();
ee.on('change', () => {
    console.log('Change Event 1');
});

ee.on('change', () => {
    console.log('Change Event 2');
});
ee.trigger('change');