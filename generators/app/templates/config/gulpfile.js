var gulp = require('gulp');
var runSequence = require('run-sequence');
var data = require('gulp-data');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');

var paths = {
  src: './src',
  dev: './dev',
  dist: './dist',
  jade: './src/**/*.jade',
  html: './src/**/*.html',
  styl: './src/**/*.styl',
  js: ['./src/systemjs.config.js', './src/**/*.js']
};

// Parse all [src].jade files to [dev].html
gulp.task('jade', function () {
  return gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest(paths.dev));
});

// Parse all [src].html files to [dev].html
gulp.task('html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.dev));
});

// Parse all [src].styl files to [dev].css
gulp.task('styl', function () {
  return gulp.src(paths.styl)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dev));
});

// Parse all [src].js files to [dev].js
gulp.task('js', function () {
  return gulp.src(paths.js)
    .pipe(gulp.dest(paths.dev));
});

gulp.task('clean-dev', function () {
  return gulp.src(paths.dev, {read: false})
    .pipe(clean());
});

// Options
// Options compress
gulp.task('compress', function () {
  return gulp.src('./css/compressed.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/build'));
});


// // Set linenos
// gulp.task('linenos', function () {
//   return gulp.src('./css/linenos.styl')
//     .pipe(stylus({linenos: true}))
//     .pipe(gulp.dest('./css/build'));
// });
//
// // External sourcemaps
// gulp.task('sourcemaps-external', function () {
//   return gulp.src('./css/sourcemaps-external.styl')
//     .pipe(sourcemaps.init())
//     .pipe(stylus())
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./css/build'));
// });
//
// // Pass an object in raw form to be accessable in stylus
// var data = {red: '#ff0000'};
// gulp.task('pass-object', function () {
//   gulp.src('./sty/main.styl')
//     .pipe(stylus({ rawDefine: { data: data }}))
//     .pipe(gulp.dest('./css/build'));
// });
//
// // Use with gulp-data
// gulp.task('gulp-data', function() {
//   gulp.src('./components/**/*.styl')
//     .pipe(data(function(){
//       return {
//         componentPath: '/' + (file.path.replace(file.base, '').replace(/\/[^\/]*$/, ''))
//       };
//     }))
//     .pipe(stylus())
//     .pipe(gulp.dest('./css/build'));
// });

gulp.task('start', function() {
  runSequence(
    'clean-dev',
    ['jade', 'html', 'styl', 'js']
  );
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.styl, ['styl']);
  gulp.watch(paths.js, ['js']);
});

// Default gulp task to run
gulp.task('default', ['start', 'watch']);
