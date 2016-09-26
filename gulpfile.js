// include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// include plug-ins
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './src/images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});


// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './src/*.html',
      htmlDst = './build';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});


// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./src/scripts/lib.js','./src/scripts/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('styles', function() {
  gulp.src(['./src/styles/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/styles/'));
});

// to use any of the require, you must first install them in the local directory using node package manager (eg. npm install gulp-sass --save-dev)
// so to run these gulp tasks you have to fire up the command prompt, cd navigate to the project directory, then fire the various functions with a gulp.
// eg. gulp scripts, then they will run and create the compiled file in the specified directory.


// build a gulp task that fires off all of the above functions and watches them so we can see changes to the source files get recompiled.

// default gulp task
// default gulp task
// default gulp task
gulp.task("default", ["imagemin", "htmlpage", "scripts", "styles"], function() {
  // watch for HTML changes
  gulp.watch('./src/*.html', ["htmlpage"]);
  // watch for JS changes
  gulp.watch('./src/scripts/*.js', ["jshint", "scripts"]);
  // watch for CSS changes
  gulp.watch('./src/styles/*.scss', ["styles"]);
});
