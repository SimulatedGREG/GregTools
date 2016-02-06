'use strict';

const gulp = require('gulp'),
  electron = require('electron-connect').server.create(),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  buffer = require('vinyl-buffer'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify'),
  browserify = require('browserify'),
  rename = require('gulp-rename'),
  vueify = require('vueify');

vueify.compiler.applyConfig({
  autoprefixer: {
    browsers: ['last 2 Chrome versions']
  },
  sass: {
    includePaths: ['src/sass']
  }
});

gulp.task('serve', () => {
  electron.start();
  gulp.watch('main.js', ['electron:restart']);

  gulp.watch('index.html', ['electron:reload']);
  gulp.watch('src/sass/vendor.scss', ['sass']);
  gulp.watch([
    'src/js/**/*.js',
    'src/js/components/**/*.vue',
    'src/sass/*.scss',
    '!src/sass/vendor.scss'
  ], ['js']);
});

gulp.task('sass', () => {
  return gulp.src('src/sass/vendor.scss')
    .pipe(concat('vendor.min.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 Chrome versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('includes/'))
    .on('end', electron.reload);
});

gulp.task('js', () => {
  let bundler = browserify({
    entries: 'src/js/src.js',
    debug: true
  });

  return bundler.transform([
    'babelify',
    {
      presets: ['es2015']
    }
  ]).transform(vueify)
    .bundle()
    .on('error', (err) => console.log(err))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('includes/'))
    .on('end', electron.reload);
});

gulp.task('electron:restart', () => {
  electron.restart();
});

gulp.task('electron:reload', () => {
  electron.reload();
});

gulp.task('default', ['serve']);
