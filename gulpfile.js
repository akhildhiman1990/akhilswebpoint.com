var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var uglifycss = require('gulp-uglifycss');

var uglifyFiles = {
	bowerFiles: ['assets/bower_components/jquery/dist/jquery.min.js', 'assets/bower_components/flexslider/jquery.flexslider-min.js', 'assets/bower_components/angular/angular.min.js', 'assets/bower_components/angular-ui-router/release/angular-ui-router.min.js', 'assets/bower_components/angular-animate/angular-animate.min.js', 'assets/bower_components/angular-flexslider/angular-flexslider.js', 'assets/bower_components/oclazyload/dist/ocLazyLoad.min.js', 'assets/bower_components/bootstrap/dist/js/bootstrap.min.js'],
	appFiles: ['assets/js/app.js'],
	cssLibFiles: ['assets/bower_components/bootstrap/dist/css/bootstrap.min.css', 'assets/bower_components/font-awesome/css/font-awesome.min.css', 'assets/bower_components/flexslider/flexslider.css']
};

gulp.task('built', ['bower-scripts', 'app-scripts', 'css-libs']);

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
});