<<<<<<< HEAD
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

=======
// JavaScript
//
// .fn             function
//
// Styleguide 5





var x = 1,
    y = '2',
    z = 3;

var fn = function(){
  return x + y;
};


console.log( fn() );
>>>>>>> 1691f4f0205ef78bf4bc8de71d6a5c2cd4f0f189
