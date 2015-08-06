/*global module:false*/



module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    //Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        strict: true,
        globals: {
          jQuery: true,
          Backbone: true,
          _: true,
          Raygun: true,
          api: true,
          Markdown: true,
          toastr: true,
          moment: true,
          prettyPrint: true,
          Hogan: true,
          d3: true,
          echarts: true,
          Dropzone: true,
          Mousetrap: true,
          Prism: true,
          Formatting: true,
          EmojiConvertor: true,
          RaygunAutocomplete: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['Scripts/raygun/**/*.js', 'Scripts/pages/**/*.js', 'Scripts/*.js']
      }
    },
    sass: {
      options: {
        sourceMap: true,
        sourceMapRoot: '/'
      },
      dist: {
        files: {
          'style/main.css': 'sass/main.scss',
          'styleguide/style.css': 'sass/styleguide.scss'
        }
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test']
      },
      markup: {
        files: ['templates/**/*.mustache', 'views/**/*.cshtml', 'areas/**/*.cshtml'],
        options: {
          livereload: 35729
        }
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'kss'],
        options: {
          livereload: 35729
        }
      }
    },
    // tinypng: {
    //   options: {
    //       apiKey: "YOUR API KEY HERE",
    //       checkSigs: true,
    //       sigFile: 'dest/file_sigs.json',
    //       summarize: true,
    //       showProgress: true,
    //       stopOnImageError: true
    //   },
    //   compress: {
    //       files: {
    //         'dest/foo.min.png': 'src/foo.png'
    //       }
    //   },
    //   compress2: {
    //       expand: true, 
    //       src: 'src/{foo,bar,baz}.png', 
    //       dest: 'dest/',
    //       ext: '.min.png'
    //   },
    //   compress3: {
    //       src: ['{foo,bar,baz}.png', '!*.min.png'],
    //       cwd: 'src/',
    //       dest: 'dest/',
    //       expand: true,
    //       rename: function(dest, src) { 
    //           var parts = src.split('/'),
    //           fname = path.basename(parts.pop(), ".png");
    //           return path.join(dest, fname + '.min.png');
    //       }
    //   }
    // },
    pagespeed: {
      options: {
        nokey: true,
        url: "https://developers.google.com"
      },
      prod: {
        options: {
          url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 90
        }
      },
      paths: {
        options: {
          paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
          locale: "en_GB",
          strategy: "desktop",
          threshold: 90
        }
      }
    },
    yslow: {
      options: {
        thresholds: {
          weight: 180,
          speed: 1000,
          score: 80,
          requests: 15
        }
      },
      pages: {
        files: [
          {
            src: 'http://google.com'
          },
          {
            src: 'http://www.google.co.uk',
            thresholds: {
              weight: 100
            }
          }
        ]
      }
    },
    kss: {
       options: {
        css: 'style.css',
        //includeType: 'css, sass, style'
       },
      dist: {
        files: {
          'styleguide': ['sass', 'styleguide/sitemap']
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-tinypng');
  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-kss');
  //grunt.registerTask('tinypng', ['gunt-tinypng']);
  //grunt.registerTask('pagespeed', ['pagespeed']);
  grunt.loadNpmTasks('grunt-yslow');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('styleguide', ['kss']);

};
