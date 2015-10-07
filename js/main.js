/** This is a description of the foo function. */
var fn = function(x){
	return x;
};


/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
 var fn2 = function(x, y){
 	return x + y;
 };



/**
 * This is an object
 */
 var obj = {

 		/**
		 * This is fn1
		 * @constructor
		 * @private
		 * @param {string} title - The title of the book.
		 * @param {string} author - The author of the book.
		 * @see obj.fn2
		 * @throws an error if x is undefined
		 * @throws an other error if y is undefined
		 * @this Marionette View
		 * @return x+y
		 */
		 fn1: function(x, y){
		 	return x + y;
		 },
		/**
		 * fn2 function
		 * @constructor
		 * @param {string} title - The title of the book.
		 * @param {string} author - The author of the book.
		 */
		 fn2: function(x, y){
		 	return x + y;
		 }
		};

