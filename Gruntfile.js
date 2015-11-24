module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			all: ['Grunfile.js', 'public/**/*.js']
		},
		concat: {
		    dist: {
		        src: [
		            'public/**/*.js', // All JS in the libs folder
		            'js/global.js'  // This specific file
		        ],
		        dest: 'js/build/production.js',
		    }
		},
		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'dist/js/magic.min.js': 'public/javascripts/magic.js'
				}
			}
		},
		less: {
			build: {
				files: {
					'dist/css/main.css': 'public/stylesheets/main.less'
				}
			},
			options: {
				'compress': true,
				'ieCompat': true,
			}
		},
		imagemin: {
			task: {
				src: ['source'], 
				dest: 'destination'
			},
			options: {
				'optimizationLevel': 3,
				'progressive': true,
				'interlaced': true,
				'use': null
			}
		},
		watch: {
			stylesheets: {
				files: ['public/**/*.css', 'public/**/*.less'],
				tasks: ['less']
			},
			scripts: {
				files: 'public/**/*.js',
				tasks: ['jshint', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less', 'imagemin', 'watch']);
};