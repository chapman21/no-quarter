module.exports = function(grunt){
grunt.initConfig({

	watch: {
			sass:{
			files:['../sass/**/*.scss','../../sass/**/**/*.scss', 'sass/*.scss'],
			tasks:['compass']
		},
		all: {
			files: ['views/*html','views/includes/*html','scripts/dev/*.js','../../public/css/*.css'],
			tasks: []
		},
		jade: {
			files: ['jade/*.jade'],
			tasks: ['jade']
		},
		options:{
			spawn:false,
			livereload: true
		}
},

	bump:{
	files:['package.json']
},

	connect:{
	all:{
		options:{
			port:300,
			hostname: "localhost",
			middleware: function(connect, options){
				return [
					require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
					connect.static(options.base)
				];
			}
		}
	}
},

	open:{
	all: {
		path: 'http://localhost:<%= connect.all.options.port%>'
    }
},

	jshint:{
	all: ['scripts/dev*.js']
},

	concat:{
	options: {
		separator: ';'
	},
	dist:{
		src:['scripts/dev/*.js'], //Using mini match for your scripts to concatenate
		dest:'scripts/salvageComplaint.js' //where to output the script
		}
},

	compass: {
	options: {
		sassDir: 'sass/',
		cssDir: 'css/',
		imageDir: '../../public/img',
		outputStyle: 'compressed',
		importPath: '../../sass/'
		//relativeAssets: false
		},
	server: {
		options: {
			debugInfo: true
		}
	}
},

	uglify: {
	dest: {
		files: {
			'scripts/salvageComplaint.min.js': ['scripts/salvageComplaint.js']
		}
	}
},

	jade: {
	compile: {
		options: {
		pretty: true,
		data: {
			debug: false
			}
		},
		files: {
			"index.html": ["jade/index.jade"],
			"views/stepOne.html": ["jade/stepOne.jade"],
			"views/disclaimer.html" : ['jade/disclaimer.jade'],
			"views/stepTwo.html" : ['jade/stepTwo.jade'],
			"views/stepThree.html" : ['jade/stepThree.jade'],
			"views/stepFour.html" : ['jade/stepFour.jade'],
			"views/stepFive.html" : ['jade/stepFive.jade'],
			"views/stepSix.html" : ['jade/stepSix.jade'],
			"views/confirmation.html" : ['jade/confirmation.jade'],
			"views/complete.html" : ['jade/complete.jade'],
			"views/error.html" : ['jade/error.jade']
		}
	}
},

	clean:{
	 options: { force: true },
	 release: ['../../public/releases/SalvageDealerComplaint/']
 },

	copy:{
	release:{
		files: {
			'../../public/releases/SalvageDealerComplaint/': ['scripts/salvageComplaint.min.js','views/*.html','index.html']
		}
	}
},

	usemin:{
		html:['../../public/releases/SalvageDealerComplaint/index.html']
}
});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bump');

//dev task
grunt.registerTask('server', [
	'compass',
	'concat',
	'uglify',
	'jade',
	'connect',
	'open',
	'watch'
]);

//build task
grunt.registerTask('build', [
	'compass',
	'concat',
	'uglify',
	'jade',
	'clean',
	'copy',
	'usemin'
]);

};
