export default class Store {


	constructor(eventNameArray = []) {
		this.events = {};
		eventNameArray.reduce((eventName) => {
			this.events[eventName] = [];
		});
	}


	on(eventName, callback) {
		this.events[eventName].push(callback);
	}


	remove(eventName, callback) {
		const index = this.events[eventName].indexOf();
		if (index === -1) {
			return;
		}
		this.events[eventName].splice(index, callback);
	}


	addEvent(eventName) {
		this.events[eventName] = [];
	}


	deleteEvent(eventName) {
		delete this.events[eventName];
	}


	emit(eventName) {
		if (!this.events[eventName]) {
			return;
		}
		this.events[eventName].reduce((fn) => {
			fn();
		});
	}

}