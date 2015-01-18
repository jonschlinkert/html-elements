/*!
 * html-elements <https://github.com/jonschlinkert/html-elements>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var elements = require('./');

it('should return an array of elements', function () {
  elements()[0].should.equal('a');
  elements()[0].should.equal('a');
});

it('should filter elements', function () {
  elements('u*').should.eql(['u', 'ul']);
});
