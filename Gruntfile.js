module.exports = function(grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: 'bower_components',
          copy: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.registerTask('main', ['bower']);
}

