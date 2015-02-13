# grunt-vanillajs

> Compiles vanillajs code into pure javascript

An awesome plugin which compiles [vanillajs](http://vanilla-js.com/) code into pure javascript.

## Getting start

First of all install the plugin

```bash
$ npm i grunt-vanillajs
```

Once the plugin has been installed, you should enable it inside your Gruntfile

```js
grunt.loadNpmTasks('grunt-vanillajs');
```

## Usage examples

```js
grunt.initConfig({
  vanillajs: {
    render: {
      files: {
        'sample.js' : ['tests/_sample.js']
      }
    }
  }
});
```