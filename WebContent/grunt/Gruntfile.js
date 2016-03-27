module.exports = function(grunt) {

	grunt.initConfig({
		concat : {
			js : {
				src : [ '../js/app.js' ],
				dest : 'build/js/scripts.js',
			},
			css : {
				src : [ '../css/main.css', '../css/theme.css' ],
				dest : 'build/css/styles.css',
			},
		},
		watch : {
			js : {
				files : [ '../js/**/*.js' ],
				tasks : [ 'concat' ],
			},
			css : {
				files : [ '../css/**/*.css' ],
				tasks : [ 'concat' ],
			},
		},
		//sass still needs to be wired up with grunt//
//		sass : {
//			dist : {
//				files : {
//					'build/css/main.css' : '../sass/main.scss',
//					'../css/theme.css' : '../css/theme.scss'
//				}
//			}
//		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
//	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', [ 'concat', 'watch ]);

};