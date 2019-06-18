var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var input = './scss/**/*.scss';
var output = './css/';
var directorioBase = './';
// BROWSER-SYNC
gulp.task('browser-sync', function() {
  browserSync.init(["css/*.css", "js/*.js"], {
    server: {
      baseDir: directorioBase
  }
  });
  gulp.watch(directorioBase + '/*.html').on('change', browserSync.reload);
});
// SASS
gulp.task('sass', function () {
  gulp.src(input)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'android 4'],
      cascade: false
    }))
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});
// WATCH
gulp.task('default', ['browser-sync', 'sass'], function () {
  gulp.watch(input, ['sass']);
});
