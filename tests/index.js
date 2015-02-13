var fs = require('fs');
var path = require('path');
var expect = require('expect.js');
var vanillajsCompiler = require('../lib/vanillajs-compiler');

describe('grunt-vanillajs', function() {
  it('should do nothing `cause of vanillajs handles itself', function() {
    var source = fs.readFileSync(path.join(__dirname, '_sample.js')).toString();
    var compiled = vanillajsCompiler.toJS(source);

    expect(compiled).to.equal(source);
  });
});