module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var port = 9000;
	
    grunt.initConfig({
    open : {
      dev: {
        path: 'http://localhost:' + port + '/demo.html'
      }
    },

    connect: {
      server: {
        options: {
          port: port,
          base: 'res/test/build',
          livereload: true
        }
      }
    },

    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'monospark_sphinx_theme/static/css',
          ext: '.css'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'monospark_sphinx_theme/static/css',
          ext: '.css'
        }]
      }
    },

    exec: {
      bower_update: {
        cmd: 'bower update'
      },
      build_sphinx: {
        cmd: 'sphinx-build res/test/src res/test/build'
      }
    },
    clean: {
      build: ['res/test/build'],
    },

    watch: {
      sass: {
        files: ['src/sass/*.sass'],
        tasks: ['sass:dev']
      },

      sphinx: {
        files: ['monospark_sphinx_theme/**/*', 'res/test/**/*.rst', 'res/test/**/*.py'],
        tasks: ['clean:build','exec:build_sphinx']
      },

      livereload: {
        files: ['res/test/build/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['clean:build','sass:dev','exec:build_sphinx','connect','open','watch']);
  grunt.registerTask('build', ['clean:build','sass:build','exec:build_sphinx']);
}