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
					base: 'build/'
				}
			}
		},


		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['dev/sass/**/*.scss'],
				tasks: ['sass:dev', 'autoprefixer']
			},
			js: {
				files: ['dev/js/**/*.js'],
				tasks: ['concat', 'uglify:dev']
			},
			jade: {
				files: ['dev/**/*.jade'],
				tasks: ['jade']
			},
			assets: {
				files: ['dev/js/vendors/**/*', 'dev/plugins/**/*', 'dev/img/**/*'],
				tasks: ['copy']
			}
		},


		jade: {
			options: {
				pretty: true
			},
			dev: {
				expand: true,
				cwd: 'dev/',
				src: ['**/*.jade', '!jade/**/*'],
				dest: 'build/',
				ext: '.html'
			}
		},


		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'build/css/main.min.css' : 'dev/sass/main.scss'
				}
			},
			build: {
				options: {
					style: 'compressed'
				},
				files: {
					'build/css/main.min.css' : 'dev/sass/main.scss'
				}
			}
		},


		autoprefixer: {
			options: {
				browsers: ['> 6%', 'last 2 version', 'Firefox > 20']
			},
			build: {
				src: 'build/css/main.min.css'
			}
		},


		concat: {
			options: {
				separator: ';',
			},
			plugins: {
				src: ['dev/js/plugins/*.js'],
				dest: 'dev/js/plugins.js',
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
					cwd: 'dev/js/',
					src: ['**/*.js', '!plugins/*.js', '!**/*.min.js'],
					dest: 'build/js/',
					expand: true,
					ext: '.min.js'
				}]
			},
			build: {
				files: [{
					cwd: 'dev/js/',
					src: ['**/*.js', '!plugins/*.js', '!**/*.min.js'],
					dest: 'build/js/',
					expand: true,
					ext: '.min.js'
				}]
			}
		},


		copy: {
			dev: {
				cwd: 'dev/',
				src: ['**/*.min.*', 'plugins/**/*', 'img/**/*', 'static/**/*'],
				dest: 'build/',
				expand: true
			},
			build: {
				cwd: 'build/',
				src: ['**/*'],
				dest: 'public/assets/',
				expand: true,
			},
		},


		clean: {
			build: {
				src: ['build']
			}
		}

	});

	// Default Tasks
	grunt.registerTask('default', ['clean', 'jade:dev', 'sass:dev', 'autoprefixer', 'concat', 'uglify:dev', 'connect', 'copy:dev', 'watch']);

	// Build Tasks
	grunt.registerTask('build', ['clean', 'sass:build', 'autoprefixer', 'concat', 'uglify:build', 'copy']);

};