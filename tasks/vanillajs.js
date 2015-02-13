/*
 * grunt-vanillajs
 * https://github.com/vitkarpov/grunt-vanillajs
 *
 * Copyright (c) 2014 Vit Karpov
 * Licensed under the MIT license.
 */

var path = require('path');
var vanillajsCompiler = require('../lib/vanillajs-compiler');

module.exports = function(grunt) {
    'use strict';

    grunt.registerMultiTask('vanillajs', 'Compile vanillajs code into pure javascript', function() {
        this.files.forEach(function(f) {
            var filepath = path.join(process.cwd(), f.src[0]);
            var vanillajsCode = grunt.file.read(filepath);

            var js = vanillajsCompiler.toJS(vanillajsCode);

            grunt.file.write(f.dest, js);
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};
