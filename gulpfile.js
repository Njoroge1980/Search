var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var utilities = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var jshint = require('gulp-jshint');


gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
});

gulp.task('jsBrowserify', ['concatInterface']function() {
  return browserify({
      entries: ['./tmp/allConcat.js']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task("minifyScripts", ["jsBrowserify"],
  function() {
    return gulp.src(".build/js/app.js")
      .pipe(uglify())
      .pipe(gulp.dest("./build/js"));
  });
