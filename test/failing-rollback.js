'use strict';

exports.up = function (next) {
	console.log('    --> This is migration {{name}} being applied');
	next();
};


exports.down = function (next) {
	console.log('    --> This is migration {{name}} being rolled back and failing');
	next(new Error('some_error from {{name}}'));
};
