module.exports = function(grunt) {
    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'dist/output.min.js': ['src/input.js']
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['uglify']);
  };
  