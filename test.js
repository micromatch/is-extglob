/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var isExtglob = require('./');

describe('isExtglob', function () {
  it('should return true when the string has an extglob:', function () {
    assert(isExtglob('?(abc)'));
    assert(isExtglob('@(abc)'));
    assert(isExtglob('!(abc)'));
    assert(isExtglob('*(abc)'));
    assert(isExtglob('+(abc)'));
    assert(isExtglob('xyz/?(abc)/xyz'));
    assert(isExtglob('xyz/@(abc)/xyz'));
    assert(isExtglob('xyz/!(abc)/xyz'));
    assert(isExtglob('xyz/*(abc)/xyz'));
    assert(isExtglob('xyz/+(abc)/xyz'));
    assert(isExtglob('?(abc|xyz)/xyz'));
    assert(isExtglob('@(abc|xyz)'));
    assert(isExtglob('!(abc|xyz)'));
    assert(isExtglob('*(abc|xyz)'));
    assert(isExtglob('+(abc|xyz)'));
  });

  it('should not match escaped extglobs', function () {
    assert(!isExtglob('\\?(abc)'));
    assert(!isExtglob('\\@(abc)'));
    assert(!isExtglob('\\!(abc)'));
    assert(!isExtglob('\\*(abc)'));
    assert(!isExtglob('\\+(abc)'));
    assert(!isExtglob('xyz/\\?(abc)/xyz'));
    assert(!isExtglob('xyz/\\@(abc)/xyz'));
    assert(!isExtglob('xyz/\\!(abc)/xyz'));
    assert(!isExtglob('xyz/\\*(abc)/xyz'));
    assert(!isExtglob('xyz/\\+(abc)/xyz'));
    assert(!isExtglob('\\?(abc|xyz)/xyz'));
    assert(!isExtglob('\\@(abc|xyz)'));
    assert(!isExtglob('\\!(abc|xyz)'));
    assert(!isExtglob('\\*(abc|xyz)'));
    assert(!isExtglob('\\+(abc|xyz)'));
    assert(!isExtglob('?\\(abc)'));
    assert(!isExtglob('@\\(abc)'));
    assert(!isExtglob('!\\(abc)'));
    assert(!isExtglob('*\\(abc)'));
    assert(!isExtglob('+\\(abc)'));
    assert(!isExtglob('xyz/?\\(abc)/xyz'));
    assert(!isExtglob('xyz/@\\(abc)/xyz'));
    assert(!isExtglob('xyz/!\\(abc)/xyz'));
    assert(!isExtglob('xyz/*\\(abc)/xyz'));
    assert(!isExtglob('xyz/+\\(abc)/xyz'));
    assert(!isExtglob('?\\(abc|xyz)/xyz'));
    assert(!isExtglob('@\\(abc|xyz)'));
    assert(!isExtglob('!\\(abc|xyz)'));
    assert(!isExtglob('*\\(abc|xyz)'));
    assert(!isExtglob('+\\(abc|xyz)'));
  });

  it('should detect when an extglob is in the same pattern as an escaped extglob', function () {
    assert(isExtglob('\\?(abc)/?(abc)'));
    assert(isExtglob('\\@(abc)/@(abc)'));
    assert(isExtglob('\\!(abc)/!(abc)'));
    assert(isExtglob('\\*(abc)/*(abc)'));
    assert(isExtglob('\\+(abc)/+(abc)'));
    assert(isExtglob('xyz/\\?(abc)/xyz/xyz/?(abc)/xyz'));
    assert(isExtglob('xyz/\\@(abc)/xyz/xyz/@(abc)/xyz'));
    assert(isExtglob('xyz/\\!(abc)/xyz/xyz/!(abc)/xyz'));
    assert(isExtglob('xyz/\\*(abc)/xyz/xyz/*(abc)/xyz'));
    assert(isExtglob('xyz/\\+(abc)/xyz/xyz/+(abc)/xyz'));
    assert(isExtglob('\\?(abc|xyz)/xyz/?(abc|xyz)/xyz'));
    assert(isExtglob('\\@(abc|xyz)/@(abc|xyz)'));
    assert(isExtglob('\\!(abc|xyz)/!(abc|xyz)'));
    assert(isExtglob('\\*(abc|xyz)/*(abc|xyz)'));
    assert(isExtglob('\\+(abc|xyz)/+(abc|xyz)'));
  });

  it('should return false when the string does not have an extglob:', function () {
    assert(!isExtglob());
    assert(!isExtglob(null));
    assert(!isExtglob(''));
    assert(!isExtglob('? (abc)'));
    assert(!isExtglob('@.(abc)'));
    assert(!isExtglob('!&(abc)'));
    assert(!isExtglob('*z(abc)'));
    assert(!isExtglob('+~(abc)'));
    assert(!isExtglob(['**/*.js']));
    assert(!isExtglob(['foo.js']));
    assert(!isExtglob('*.js'));
    assert(!isExtglob('!*.js'));
    assert(!isExtglob('!foo'));
    assert(!isExtglob('!foo.js'));
    assert(!isExtglob('**/abc.js'));
    assert(!isExtglob('abc/*.js'));
    assert(!isExtglob('abc/{a,b}.js'));
    assert(!isExtglob('abc/{a..z}.js'));
    assert(!isExtglob('abc/{a..z..2}.js'));
    assert(!isExtglob('abc/(aaa|bbb).js'));
    assert(!isExtglob('abc/?.js'));
    assert(!isExtglob('?.js'));
    assert(!isExtglob('[abc].js'));
    assert(!isExtglob('[^abc].js'));
    assert(!isExtglob('a/b/c/[a-z].js'));
    assert(!isExtglob('[a-j]*[^c]b/c'));
    assert(!isExtglob('.'));
    assert(!isExtglob('aa'));
    assert(!isExtglob('abc.js'));
    assert(!isExtglob('abc/def/ghi.js'));
  });
});

