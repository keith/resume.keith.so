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
            src: 'bower_components/jquery/jquery.min.js',
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
          {
            src: 'bower_components/FitText.js/jquery.fittext.js',
            dest: 'build/js/fittext.js'
          },
        ]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/main.css': 'sass/main.scss',
        }
      }
    },

    jekyll: {
      dist: {
        dest: './build'
      }
    },

    watch: {
      files: ['**/*.html', 'sass/*'],
      tasks: ['default']
    },
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['jekyll', 'copy', 'sass']);
}

