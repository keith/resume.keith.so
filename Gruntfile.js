module.exports = function(grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: 'bower_components',
          copy: false
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            src: 'bower_components/jquery/jquery.js',
            dest: 'build/js/jquery.js'
          },
          {
            src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
            dest: 'build/js/bootstrap.min.js'
          },
          {
            src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
            dest: 'sass/_bootstrap.scss'
          },
        ]
      }
    },
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['bower']);
}

