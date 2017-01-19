/**
 * Created by FryderykG on 19.01.17.
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'css/main.sass'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/built/'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['css/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: ['js/src/main.js'],
                dest: 'js/dist/main.js'
            }
        },
        uglify: {
            options: {
                mangle: false // to prevent changes to your variable and function names
            },
            my_target: {
                files: {
                    'dest/output.min.js': ['src/input.js']
                }
            }
        }

    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ["sass"]);
    grunt.registerTask('img_min', ["imagemin"]);
    grunt.registerTask('concat', ["concat"]);
};
