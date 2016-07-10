'use strict';


// LICENSE: MIT


/**
 * Dispatcherクラス
 */
export default class Dispatcher {

	/**
	 * Dispatcherインスタンスを取得します。
	 * @returns {Dispatcher}
	 */
	static getDispatcher() {
		if (!Dispatcher.instance) {
			Dispatcher.instance = new Dispatcher();
		}
		return Dispatcher.instance;
	}

	/**
	 * コンストラクタ
	 */
	constructor() {
		this.handlers = {};
	}

	/**
	 * DispatcherにStoreオブジェクトを設定します。<br>
	 * 設定するStoreオブジェクトはemitメソッドを実装していなくてはなりません。
	 * @param store {Object}
	 */
	setStore(store) {
		if (!store) {
			throw new Error('Illegal argument.');
		}
		if (typeof store.emit !== 'function') {
			throw new Error('Illegal argument. Store must implement the emit method.');
		}
		this.store = store;
	}

	/**
	 * キー(actionType)とそれに対応するコールバック関数(function)を設定します。
	 * @param actionType {string}
	 * @param callback {function}
	 */
	register(actionType, callback) {
		if (typeof actionType !== 'string') {
			throw new Error('Illegal argument. Action type must be string.');
		}
		if (typeof callback !== 'function') {
			throw new Error('Illegal argument. Action type must be function.');
		}
		if (!this.handlers[actionType]) {
			this.handlers[actionType] = [];
		}
		const index = this.handlers[actionType].indexOf(callback);
		if (index !== -1) {
			return;
		}
		this.handlers[actionType].push(callback);
	}

	/**
	 * キー(actionType)で登録されたコールバック関数(function)を削除します。
	 * @param actionType {string}
	 * @param callback {function}
	 */
	remove(actionType, callback) {
		if (typeof actionType !== 'string') {
			throw new Error('Illegal argument. Action type must be string.');
		}
		if (typeof callback !== 'function') {
			throw new Error('Illegal argument. Action type must be function.');
		}
		const index = this.handlers[actionType].indexOf(callback);
		if (index === -1) {
			return;
		}
		this.handlers[actionType].splice(index, 1);
	}

	/**
	 * 第一引数に与えられたオブジェクトの actionType でもって、<br>
	 * register メソッドで事前に設定されたcallback関数を実行します。
	 * @param payload {Object}
	 */
	dispatch(payload) {
		if (!payload) {
			throw new Error('Illegal argument. Payload does not exist.');
		}
		if (typeof payload.actionType !== 'string') {
			throw new Error('Illegal argument. Action type of payload must be string.');
		}
		if (!this.handlers[payload.actionType]) {
			return;
		}
		for (let i = 0; i < this.handlers[payload.actionType].length; i++) {
			let handler = this.handlers[payload.actionType][i];
			this.store.emit(handler, payload);
		}
	}

};
