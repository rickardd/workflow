/**
 * This is an object
 */
 var obj2 = {

 		/**
		 * This is fn1
		 *
		 * a new paragraph
		 * Same paragraph
		 *
		 * A new paragraph again
		 * @constructor
		 * @private
		 * @param {string} title - The title of the book.
		 * @param {string} author - The author of the book.
		 * @see obj.fn2
		 * @throws an error if x is undefined
		 * @throws an other error if y is undefined
		 * @this {Marionette.View} marionette
		 * @return x+y
		 */
		 fn1: function(x, y){
		 	this.something;
		 	return x + y;
		 },
		/**
		 * fn2 function
		 * @constructor
		 * @param {string} title - The title of the book.
		 * @paragraph÷am {string} author - The author of the book.
		 */
		 fn2: function(x, y){
		 	return x + y;
		 }
		};

	/**
	 * [crazyFn description]
	 * @see      {reference object}
	 * @property            properties in            function
	 * @param    {[type]}       x          [description]
	 * @param    {[type]}       y          [description]
	 * @return   {[type]}                  [description]
	 */
var crazyFn = function(x, y){
	var z = 'hello';
	this.hello = z,
	return x + y + z;
}