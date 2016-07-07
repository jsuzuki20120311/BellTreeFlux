'use strict';


export default class Dispatcher {


	static getDispatcher() {
		if (!Dispatcher.instance) {
			Dispatcher.instance = new Dispatcher();
		}
		return Dispatcher.instance;
	}

	constructor() {
		this.handlers = {};
	}

	setStore(store) {
		if (!store || !store.emit) {
			throw new Error('illegal argument.');
		}
		this.store = store;
	}

	register(actionType, callback) {
		if (!this.handlers[actionType]) {
			this.handlers[actionType] = [];
		}
		this.handlers[actionType].push(callback);
	}

	remove(actionType, callback) {
		const index = this.handlers[actionType].indexOf();
		if (index === -1) {
			return;
		}
		this.handlers[actionType].splice(index, callback);
	}

	dispatch(payload) {
		if (!this.handlers[payload.actionType]) {
			return;
		}
		for (let i = 0; i < this.handlers[payload.actionType].length; i++) {
			let handler = this.handlers[payload.actionType][i];
			this.store.emit(handler);
		}
	}

};
