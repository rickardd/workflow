


// A SIMPLE DESCTIPTION

/**
 * This is a simple documentation
 *
**/
var hulk = function(){
  return '';
};





// A MORE SPECIFIC DESCTIPTION

/**
  * A function with further description
  *
  * @param {string} name
  * @return {String} a emtpty string
  */
var catWoman = function(){
  return '';
};





// @class - A function that is ment to be called with the keyword new.
// @public or private

/**
  * A function with further description
  *
  * @class
  * @public
  * @param {string} name - The UNIQUE name you like the pig to have
  * @param {integer} size - A number 1 to 5 where 5 is biggest
  * @throws an error if "name" is undefined or already exists
  * @throws an other error if "size" is undefined
  * @return {Object} A pig
  */
var spiderPig = function( name, size ){
  return '';
};





// THIS FUNCTION WONT APPEAR IN THE DOCS

var ironMan = function(){
  return '';
};





/**
* RaygunMaps is magic and are using google maps api;
* @see      {@link https://developers.google.com}
*/
raygunMaps = function(x, y){
  return x + y;
};






// NAMESPACES

/** @namespace */
var SuperHero = {};


// BAT MAN


(function(ns) {
    /**
     * @namespace
     * @alias SuperHero.Batman
     */
    var bat = {};

    /** batmans */
    spider.equipment = function() {};

    /** aaa */
    bat.car = function() {};


    /**
    * Mixing bats and men
    *
    * @param {object} bat - A man to mix
    * @param {object} man - A bat to mix
    * @return {object} A batman
    */
    bat.create = function( bat, man ){
      return '';
    };

    ns.B = bat;
})(SuperHero);


// SPIDER MAN

(function(ns) {
    /**
     * @namespace
     * @alias SuperHero.Spiderman
     */
    var spider = {};

    /** batmans */
    spider.equipment = function() {};

    /** aaa */
    spider.car = function() {};


    /**
    * Mixing bats and men
    *
    * @param {object} spider - A spider to mix
    * @param {object} man - A man to mix
    * @return {object} A batman
    */
    spider.create = function( spider, man ){
      return '';
    };

    ns.B = spider;
})(SuperHero);

