require("mofron-event-click");
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file checkbox.js
	 * @author simpart
	 */

	/**
	 * @class mofron.comp.Checkbox
	 * @brief Accordion Component class
	 */
	mofron.comp.Checkbox = function (_mofron$Component) {
	    _inherits(_class, _mofron$Component);

	    function _class(prm, opt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, prm));

	            _this.setBaseName('Checkbox');
	            _this.name('Checkbox');

	            _this.def_chk = false;
	            _this.chg_evt = null;

	            if (null !== opt) {
	                _this.option(opt);
	            }
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    /**
	     * initialize DOM contents
	     * 
	     * @param vd : (mofron.util.Vdom) vdom object
	     */


	    _createClass(_class, [{
	        key: 'initDomConts',
	        value: function initDomConts(prm) {
	            try {
	                if (null !== prm) {
	                    if ('boolean' !== typeof chk) {
	                        throw new Error('invalid parameter');
	                    }
	                    this.def_sel = prm;
	                }
	                var chk = new mofron.util.Vdom('input', this);
	                chk.attr('type', 'checkbox');
	                this.vdom().addChild(chk);
	                this.target(this.vdom());

	                this.addEvent(new mofron.event.Click(function (obj) {
	                    try {
	                        var evt = obj.changeEvent();
	                        if (null !== evt) {
	                            evt(obj);
	                        }
	                    } catch (e) {
	                        console.error(e.stack);
	                        throw e;
	                    }
	                }, this));
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setCompConf',
	        value: function setCompConf() {
	            try {
	                this.check(this.def_chk);
	                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setCompConf', this).call(this);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getEventTgt',
	        value: function getEventTgt() {
	            try {
	                return this.vdom().getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'changeEvent',
	        value: function changeEvent(fnc) {
	            try {
	                if (undefined === fnc) {
	                    return this.chg_evt;
	                }
	                if (null === fnc) {
	                    throw new Error('invalid parameter');
	                }
	                this.chg_evt = fnc;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'check',
	        value: function check(chk) {
	            try {
	                if (undefined === chk) {
	                    return this.vdom().getChild(0).getDom().checked;
	                }
	                if ('boolean' !== typeof chk) {
	                    throw new Error('invalid parameter');
	                }

	                if (null === this.vdom()) {
	                    this.def_chk = chk;
	                    return;
	                }
	                this.vdom().getChild(0).getDom().checked = chk;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.Component);

/***/ }
/******/ ]);
