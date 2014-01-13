module.exports = function (grunt) {

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

	// Project Configuration
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),


		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				hostname: 'localhost',
			},
			dist: {
				options: {
					open: true,
					base: 'dev/build/'
				}
			}
		},


		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['dev/source/sass/**/*.scss'],
				tasks: ['sass:dev', 'autoprefixer']
			},
			js: {
				files: ['dev/source/js/**/*.js'],
				tasks: ['concat', 'uglify:dev']
			},
			jade: {
				files: ['dev/source/**/*.jade'],
				tasks: ['jade']
			}
		},


		jade: {
			dev: {
				expand: true,
				cwd: 'dev/source/',
				src: ['**/*.jade', 'jade/**/*'],
				dest: 'dev/build/',
				ext: '.html'
			}
		},


		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'dev/build/css/main.css' : 'dev/source/sass/main.scss'
				}
			},
			build: {
				options: {
					style: 'compressed'
				},
				files: {
					'dev/build/css/main.css' : 'dev/source/sass/main.scss'
				}
			}
		},


		autoprefixer: {
			options: {
				browsers: ['> 6%', 'last 2 version']
			},
			build: {
				src: 'dev/build/css/main.css'
			}
		},


		concat: {
			options: {
				separator: ';',
			},
			plugins: {
				src: ['dev/source/js/plugins/*.js'],
				dest: 'dev/source/js/plugins.js',
			},
		},


		uglify: {
			dev: {
				options: {
					preserveComments: true,
					mangle: false,
					beautify: true
				},
				files: [{
					cwd: 'dev/source/js/',
					src: ['**/*.js', '!plugins/*.js'],
					dest: 'dev/build/js/',
					expand: true,
					ext: '.min.js'
				}]
			},
			build: {
				files: [{
					cwd: 'dev/source/js/',
					src: ['**/*.js', '!plugins/*.js'],
					dest: 'dev/build/js/',
					expand: true,
					ext: '.min.js'
				}]
			}
		},


		copy: {
			build: {
				cwd: 'dev/source',
				src: [ 'css/*', 'js/**/*'],
				dest: 'public/assets/',
				expand: true,
			},
		},


		clean: {
			build: {
				src: ['dev/build']
			}
		}

	});

	// Default Tasks
	grunt.registerTask('default', ['clean', 'jade:dev', 'sass:dev', 'autoprefixer', 'concat', 'uglify:dev', 'connect', 'watch']);

	// Build Tasks
	grunt.registerTask('build', ['clean', 'sass:build', 'autoprefixer', 'concat', 'uglify:build', 'copy']);

};