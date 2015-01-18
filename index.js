/*!
 * html-elements <https://github.com/jonschlinkert/html-elements>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var micromatch = require('micromatch');
var elements = require('./elements.json');

module.exports = function htmlElements(glob) {
  return filter(toArray(elements), glob);
};

/**
 * Filter the array of elements with glob patterns
 */

function filter(arr, glob) {
  return glob ? micromatch(arr, glob) : arr;
}

/**
 * Create an array of html elements
 */

function toArray(elements) {
  var len = elements.length;
  var i = 0;
  var res = [];
  while (i < len) {
    res.push(elements[i++].element);
  }
  return res;
}

/**
 * Expose `elements`
 */

module.exports.elements = elements;
