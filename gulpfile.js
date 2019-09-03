const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglifyJs = require('gulp-uglifyjs');
const uglifyCss = require('gulp-uglifycss');
const uglifyFiles = {
	jsLibFiles: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/flexslider/jquery.flexslider-min.js', 'node_modules/angular/angular.min.js', 'node_modules/angular-ui-router/release/angular-ui-router.min.js', 'node_modules/angular-animate/angular-animate.min.js', 'node_modules/angular-flexslider/angular-flexslider.js', 'node_modules/oclazyload/dist/ocLazyLoad.min.js', 'node_modules/bootstrap3/dist/js/bootstrap.min.js'],
	cssLibFiles: ['node_modules/bootstrap3/dist/css/bootstrap.min.css', 'node_modules/font-awesome/css/font-awesome.min.css', 'node_modules/flexslider/flexslider.css']
};

function css() {
  return src(uglifyFiles.cssLibFiles).pipe(concat('css-libs.css')).pipe(uglifyCss({
	"maxLineLen" : 80,
	"uglyComments" : true
  })).pipe(dest('dist/css/'));
}

function js() {
  return src(uglifyFiles.jsLibFiles).pipe(concat('js-libs.js')).pipe(uglifyJs()).pipe(dest('dist/js/'));
}

exports.js = js;
exports.css = css;

exports.default = parallel(css, js);


/*var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var uglifycss = require('gulp-uglifycss');

var uglifyFiles = {
	bowerFiles: ['assets/bower_components/jquery/dist/jquery.min.js', 'assets/bower_components/flexslider/jquery.flexslider-min.js', 'assets/bower_components/angular/angular.min.js', 'assets/bower_components/angular-ui-router/release/angular-ui-router.min.js', 'assets/bower_components/angular-animate/angular-animate.min.js', 'assets/bower_components/angular-flexslider/angular-flexslider.js', 'assets/bower_components/oclazyload/dist/ocLazyLoad.min.js', 'assets/bower_components/bootstrap3/dist/js/bootstrap.min.js'],
	appFiles: ['assets/js/app.js'],
	cssLibFiles: ['assets/bower_components/bootstrap3/dist/css/bootstrap.min.css', 'assets/bower_components/font-awesome/css/font-awesome.min.css', 'assets/bower_components/flexslider/flexslider.css']
};


gulp.task('build', ['bower-scripts', 'app-scripts', 'css-libs']);

gulp.task('bower-scripts', function() {
	return gulp.src(uglifyFiles.bowerFiles).pipe(concat('bower-scripts.js')).pipe(uglify()).pipe(gulp.dest('dist/js/'));
});

gulp.task('app-scripts', function() {
	return gulp.src(uglifyFiles.appFiles).pipe(concat('app-scripts.js')).pipe(uglify()).pipe(gulp.dest('dist/js/'));
});

gulp.task('css-libs', function() {
	gulp.src(uglifyFiles.cssLibFiles).pipe(concat('css-libs.css')).pipe(uglifycss({
		"maxLineLen" : 80,
		"uglyComments" : true
	})).pipe(gulp.dest('dist/css/'));
});*/




