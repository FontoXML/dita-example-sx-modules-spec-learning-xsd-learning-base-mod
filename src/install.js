define([
	'fontoxml-modular-ui/uiManager',

	'./ui/TimeValueModal.jsx'
], function (
	uiManager,

	TimeValueModal
) {
	'use strict';

	return function install () {
		uiManager.registerReactComponent('TimeValueModal', TimeValueModal);

	};
});
