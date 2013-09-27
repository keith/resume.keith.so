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
            src: 'bower_components/normalize-css/normalize.css',
            dest: 'sass/_normalize.scss'
          },
          {
            src: 'bower_components/skeleton/stylesheets/skeleton.css',
            dest: 'sass/_skeleton.scss'
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
      files: ['**/*.html', 'sass/*', '_posts/*.md'],
      tasks: ['default']
    },

    clean: {
      build: ['build', 'sass/_normalize.scss'],
      release: ['build/2013']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['jekyll', 'copy', 'sass']);
}

