module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var port = 9001;
	
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
          dest: 'monospark_sphinx_theme/static',
          ext: '.css'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'monospark_sphinx_theme/static',
          ext: '.css'
        }]
      }
    },

    exec: {
      sphinx: {
        cmd: 'sphinx-build -a res/test/src res/test/build'
      }
    },
    clean: {
      build: ['res/test/build'],
    },

    watch: {
      sass: {
        files: ['sass/*.sass'],
        tasks: ['sass:dev','exec:sphinx']
      },

      sphinx: {
        files: ['monospark_sphinx_theme/**/*', 'res/test/src/**/*.rst', 'res/test/src/**/*.py'],
        tasks: ['exec:sphinx']
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

  grunt.registerTask('default', ['clean:build','sass:dev','exec:sphinx','connect','open','watch']);
  grunt.registerTask('build', ['clean:build','sass:build','exec:sphinx']);
}