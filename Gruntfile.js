module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			all: ['Grunfile.js', 'public/**/*.js']
		},
		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'dist/js/main.min.js': 'public/js/main.js'
				}
			}
		},
		less: {
			build: {
				files: {
					'dist/css/style.css': 'public/css/style.less'
				}
			},
			options: {
				'compress': true,
				'ieCompat': true,
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
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'uglify', 'less', 'watch']);
};