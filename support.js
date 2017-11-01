'use strict';

var fs = require('fs');
var path = require('path');
var clone = require('gh-clone');
var write = require('write-json');
var del = require('delete');

del(['vendor', 'elements.json'])
  .then(function() {
    return clone('w3c/elements-of-html', {dest: 'vendor'})
      .then(function() {
        fs.renameSync('vendor/elements.json', 'elements.json');
      })
      .then(function() {
        console.log('finished');
      })
      .catch(console.error);
  });

