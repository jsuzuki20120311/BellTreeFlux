'use strict';

import Dispatcher from './Dispatcher';


export default class Store {


	constructor() {
		this.data = {};
	}


	on(eventName, callback) {
		Dispatcher.getDispatcher().register(eventName, callback);
	}


	off(eventName, callback) {
		Dispatcher.getDispatcher().remove(eventName, callback);
	}

}
