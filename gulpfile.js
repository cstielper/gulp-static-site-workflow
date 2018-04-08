const gulp = require('gulp'),
  gulpif = require('gulp-if'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  rollup = require('gulp-better-rollup'),
  babel = require('rollup-plugin-babel'),
  eslint = require('rollup-plugin-eslint'),
  resolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  argv = require('yargs').argv,
  browserSync = require('browser-sync').create();

const isProduction = (argv.production === undefined) ? false : true;

/**************/

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
});

/**************/

gulp.task('php', () => {
  gulp
    .src('./src/**/*.php')
    .pipe(gulp.dest('dist'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
    .pipe(notify({ message: 'TASK: "php" completed', onLast: true }));
});

/**************/

gulp.task('html', () => {
  gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
    .pipe(notify({ message: 'TASK: "html" completed', onLast: true }));
});

/**************/

gulp.task('fonts', () => {
  gulp
    .src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(notify({ message: 'TASK: "fonts" completed', onLast: true }));
});

/**************/

gulp.task('images', () => {
  gulp
    .src('./src/imgs/*')
    .pipe(gulp.dest('./dist/imgs'))
    .pipe(notify({ message: 'TASK: "images" completed', onLast: true }));
});

/**************/

gulp.task('css', () => {
  gulp
    .src('./src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulpif(argv.production, cleanCSS()))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./dist/css'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
    .pipe(notify({ message: 'TASK: "css" completed', onLast: true }));
});

/**************/

gulp.task('js', () => {
  gulp
    .src('./src/js/scripts.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      rollup(
        {
          plugins: [
            resolve({
              jsnext: true,
              main: true,
              browser: true
            }),
            commonjs(),
            eslint(),
            babel({
              exclude: 'node_modules/**'
            }),
            //uglify()
          ]
        },
        {
          format: 'iife'
        }
      )
    )
    .pipe(gulpif(argv.production, uglify()))
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(sourcemaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./dist/js'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
    .pipe(notify({ message: 'TASK: "js" completed', onLast: true }));
});

/**************/

gulp.task('build', () => {
  gulp.start('php');
  gulp.start('html');
  gulp.start('fonts');
  gulp.start('images');
  gulp.start('css');
  gulp.start('js');
});

gulp.task('watch', ['serve'], () => {
  gulp.watch('src/fonts/*', ['fonts']);
  gulp.watch('src/sass/**/*.scss', ['css']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/**/*.php', ['php']);
  gulp.watch('src/**/*.html', ['html']);
});

gulp.task('default', ['watch']);

/**************/