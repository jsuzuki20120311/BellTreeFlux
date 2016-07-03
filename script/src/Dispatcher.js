export default class Dispatcher {


	static getDispatcher() {

		if (!Dispatcher.instance) {

			Dispatcher.instance = new Dispatcher();
		}

		return Dispatcher.instance;
	}


	register(fn) {

		this.fn = fn;
	}


	dispatch(payload) {

		this.fn(payload);
	}

};
