export default class Store {


	constructor() {
		this.data = {};
	}


	on(eventName, callback) {
		if (!this.events) {
			this.events = {};
		}
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
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
		for (let i = 0; i < this.events[eventName].length; i++) {
				let fn = this.events[eventName][i];
				fn(this.data);
		}
	}

}