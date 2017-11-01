/*!
 * html-elements <https://github.com/jonschlinkert/html-elements>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var elements = require('./');

it('should return an array of elements', function() {
  assert.equal(elements()[0], 'a');
  assert.equal(elements()[0], 'a');
});

it('should filter elements', function() {
  assert.deepEqual(elements('u*'), ['u', 'ul']);
});
