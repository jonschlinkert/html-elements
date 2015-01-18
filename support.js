'use strict';

var fs = require('fs');
var path = require('path');
var html = tryRequire(__dirname, 'node_modules/elements-of-html/elements.json');

function writeJson(fp, obj) {
  var json = JSON.stringify(obj, null, 2);
  fs.writeFileSync(fp, json);
}

function tryRequire(fp) {
  fp = path.resolve.apply(path, arguments);
  try {
    return require(fp);
  } catch(err) {}
  return fp;
}

writeJson('elements.json', html);
