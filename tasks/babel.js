module.exports = function babel(grunt) {

    grunt.loadNpmTasks('grunt-babel');

    // Options
    return {
        options: {
            sourceMap: false
        },
        dist: {
            files: {
                'public/js/app.js': 'public/js/app.es6'
            }
        }
    };
};
