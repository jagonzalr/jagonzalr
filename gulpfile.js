
'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const inject = require('gulp-inject');
const minimist = require('minimist');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const serviceWorker = require('gulp-serviceworker');
const sourcemaps = require('gulp-sourcemaps');


/*
* HTML
*/

gulp.task('htmlToTmp', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('.tmp'));
});

gulp.task("minify-html", ['htmlToTmp'], function() {
  return gulp.src('.tmp/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist/'))
});

gulp.task('manifestToTmp', function() {
  return gulp.src('src/manifest.json')
    .pipe(gulp.dest('.tmp/'));
});

gulp.task('manifestToDist' , ['manifestToTmp'], function() {
  return gulp.src('.tmp/manifest.json')
    .pipe(gulp.dest('dist/'));
});


/*
* CSS
*/

gulp.task('sass', function () {
  return gulp.src('src/static/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('.tmp/static/css'));
});

gulp.task('minify-css', ['sass'], function() {
  return gulp.src('.tmp/static/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/static/css'));
});


/*
* FONTS
*/

gulp.task('fontsToTmp', function() {
  return gulp.src('src/static/fonts/**/*')
    .pipe(gulp.dest('.tmp/static/fonts/'));
});

gulp.task('copy-fonts', ['fontsToTmp'], function() {
  return gulp.src('.tmp/static/fonts/**/*')
    .pipe(gulp.dest('dist/static/fonts/'));
});


/*
* Images
*/

gulp.task('imagesToTmp', function() {
  return gulp.src('src/static/images/**/*')
    .pipe(gulp.dest('.tmp/static/images/'));
});

gulp.task('imagesToDist', ['imagesToTmp'], function() {
  return gulp.src('.tmp/static/images/**/*')
    .pipe(gulp.dest('dist/static/images/'));
});


/*
* INJECTIONS
*/

gulp.task('inject', ['htmlToTmp', 'sass', 'fontsToTmp', 'manifestToTmp', 'imagesToTmp'], function() {
  return gulp.src(['.tmp/*.html'])
    .pipe(inject(
      gulp.src('.tmp/static/css/styles.css', {read: false}),
      {ignorePath: '.tmp', addRootSlash: true}))
    .pipe(gulp.dest('.tmp'))
});

gulp.task('inject:minified', ['minify-html', 'minify-css', 'copy-fonts', 'manifestToDist', 'imagesToDist'], function() {
  return gulp.src(['dist/*.html'])
    .pipe(inject(
      gulp.src('dist/static/css/styles.min.css', {read: false}),
      {ignorePath: 'dist', addRootSlash: true}))
    .pipe(gulp.dest('dist'))
    .pipe(serviceWorker({
      rootDir: 'dist/',
    }));
});


/*
* BUILDS
*/

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('serve', ['inject'], function() {
  browserSync.init(['.tmp/static/css/*.css', '.tmp/static/js/*.js', '.tmp/static/images/*', 'dist/static/fonts/*'], {
    notify:false,
    port:3000,
    server: {
        baseDir: './.tmp'
    }
  });

  gulp.watch('src/static/sass/*.scss', ['inject', browserSync.reload]);
  gulp.watch('src/*.html', ['inject', browserSync.reload]);
});

gulp.task('serve:dist', ['inject:minified'], function() {
  browserSync.init(['dist/static/css/*.css', 'dist/static/js/*.js', 'dist/static/images/*', 'dist/static/fonts/*'], {
    notify:false,
    port:9000,
    server: {
        baseDir: './dist'
    }
  });
});

gulp.task('build', ['clean', 'inject:minified']);