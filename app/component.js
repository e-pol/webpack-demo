/**
 * Created by 123 on 08.08.2016.
 */
module.exports = function () {
  "use strict";

  var element = document.createElement('h1');

  element.className = 'pure-button';
  element.innerHTML = 'Hello world ! It`s me, Pete';

  return element;
};
