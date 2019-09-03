const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglifyJs = require('gulp-uglifyjs');
const uglifyCss = require('gulp-uglifycss');
const uglifyFiles = {
	jsLibFiles: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/flexslider/jquery.flexslider-min.js', 'node_modules/angular/angular.min.js', 'node_modules/angular-ui-router/release/angular-ui-router.min.js', 'node_modules/angular-strap/dist/angular-strap.min.js', 'node_modules/angular-route/angular-route.min.js', 'node_modules/angular-strap/dist/angular-strap.tpl.min.js', 'node_modules/angular-animate/angular-animate.min.js', 'node_modules/angular-flexslider/angular-flexslider.js',  'node_modules/oclazyload/dist/ocLazyLoad.min.js', 'node_modules/bootstrap3/dist/js/bootstrap.min.js', 'node_modules/moment/min/moment.min.js'],
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