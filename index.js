'use strict';

const Promise = require('bluebird');

const isValidStream = (stream) => {
	if (!stream || !stream.readable) {
		return null;
	} else return true;
};

const toArray = (stream) => {
	return new Promise((resolve, reject) => {
		if (!isValidStream(stream)) {
			reject(new Error('Either Stream Ended or not valid Stream'));
		}
		let array = [];
		stream.on('data', (chunk) => {
			array.push(chunk);
		});
		stream.on('end', () => {
			resolve(array);
		});
		stream.on('error', reject);
		stream.on('close', () => {
			resolve(array);
		});
	});
};

const toBuffer = (stream) => {
	return toArray(stream)
		.then((array) => {
			let newBuffer = Buffer.concat(array);
			return newBuffer;
		});
};

module.exports = {
	toArray,
	toBuffer
};