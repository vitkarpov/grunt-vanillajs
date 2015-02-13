module.exports = function(grunt) {
  grunt.initConfig({
    vanillajs: {
      render: {
        files: {
          'sample.js' : ['tests/_sample.js']
        }
      }
    }
  });

  grunt.loadTasks("tasks/");
  grunt.registerTask("default", ["vanillajs"]);
}