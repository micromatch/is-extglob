/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

require('should');
var isExtglob = require('./');

describe('isExtglob', function () {
  it('should return true when the string has an extglob:', function () {
    isExtglob('?(abc)').should.be.true;
    isExtglob('@(abc)').should.be.true;
    isExtglob('!(abc)').should.be.true;
    isExtglob('*(abc)').should.be.true;
    isExtglob('+(abc)').should.be.true;
    isExtglob('xyz/?(abc)/xyz').should.be.true;
    isExtglob('xyz/@(abc)/xyz').should.be.true;
    isExtglob('xyz/!(abc)/xyz').should.be.true;
    isExtglob('xyz/*(abc)/xyz').should.be.true;
    isExtglob('xyz/+(abc)/xyz').should.be.true;
    isExtglob('?(abc|xyz)/xyz').should.be.true;
    isExtglob('@(abc|xyz)').should.be.true;
    isExtglob('!(abc|xyz)').should.be.true;
    isExtglob('*(abc|xyz)').should.be.true;
    isExtglob('+(abc|xyz)').should.be.true;
  });

  it('should return false when the string does not have an extglob:', function () {
    isExtglob('? (abc)').should.be.false;
    isExtglob('@.(abc)').should.be.false;
    isExtglob('!&(abc)').should.be.false;
    isExtglob('*z(abc)').should.be.false;
    isExtglob('+~(abc)').should.be.false;
    isExtglob().should.be.false;
    isExtglob(null).should.be.false;
    isExtglob(['**/*.js']).should.be.false;
    isExtglob(['foo.js']).should.be.false;
    isExtglob('*.js').should.be.false;
    isExtglob('!*.js').should.be.false;
    isExtglob('!foo').should.be.false;
    isExtglob('!foo.js').should.be.false;
    isExtglob('**/abc.js').should.be.false;
    isExtglob('abc/*.js').should.be.false;
    isExtglob('abc/{a,b}.js').should.be.false;
    isExtglob('abc/{a..z}.js').should.be.false;
    isExtglob('abc/{a..z..2}.js').should.be.false;
    isExtglob('abc/(aaa|bbb).js').should.be.false;
    isExtglob('abc/?.js').should.be.false;
    isExtglob('?.js').should.be.false;
    isExtglob('[abc].js').should.be.false;
    isExtglob('[^abc].js').should.be.false;
    isExtglob('a/b/c/[a-z].js').should.be.false;
    isExtglob('[a-j]*[^c]b/c').should.be.false;
    isExtglob('.').should.be.false;
    isExtglob('aa').should.be.false;
    isExtglob('abc.js').should.be.false;
    isExtglob('abc/def/ghi.js').should.be.false;
  });
});

