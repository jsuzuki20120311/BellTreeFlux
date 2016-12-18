# bell-tree-flux

[![Code Climate](https://codeclimate.com/github/jsuzuki20120311/bell-tree-flux/badges/gpa.svg)](https://codeclimate.com/github/jsuzuki20120311/bell-tree-flux)


## Abstract

Simple flux library.

* sample project https://github.com/jsuzuki20120311/bell-tree-flux-sample
* demo http://www.belltree.tokyo/bell-tree-flux-sample/


## install

```sh
$ npm install bell-tree-flux --save
```

## import

### require

```javascript
var BellTreeFlux = require('bell-tree-flux').default;
```

### ES2015 import

```javascript
import BellTreeFlux from 'bell-tree-flux';
```


## How to use

### setStore

```javascript
var BellTreeFlux = require('bell-tree-flux').default;

var store = {
  emit: function () {
    // do something
  }
};

BellTreeFlux.Dispatcher.getDispatcher().setStore(store);
```


### register

```javascript

// arg1: actionName , arg2: event handler callback function
BellTreeFlux.Dispatcher.getDispatcher().register(Constant.ACTION_TYPE.UPDATE_TODO, this.onUpdate);

```


### remove

```javascript

// arg1: actionName , arg2: event handler callback function
BellTreeFlux.Dispatcher.getDispatcher().remove(Constant.ACTION_TYPE.UPDATE_TODO, this.onUpdate);

```


## License

MIT
