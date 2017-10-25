module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          "bower_components/bootstrap/dist/css/bootstrap.css": "bower_components/bootstrap/less/bootstrap.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['bower_components/bootstrap/less/**/*.less'],
        tasks: ['less']
      }
    }
  });
  grunt.registerTask('default', ['less', 'watch']);
};