'use strict';


export default class Dispatcher {


	static getDispatcher() {
		if (!Dispatcher.instance) {
			Dispatcher.instance = new Dispatcher();
		}
		return Dispatcher.instance;
	}


	register(eventName, callback) {
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

	dispatch(payload) {
		if (!this.events[payload.eventName]) {
			return;
		}
		for (let i = 0; i < this.events[payload.eventName].length; i++) {
			let fn = this.events[payload.eventName][i];
			fn(this.data);
		}
	}

};
