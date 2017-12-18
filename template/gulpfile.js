var gulp = require('gulp');
var sass = require("gulp-sass");
var watchSass = require("gulp-watch-sass");
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var cssbeautify = require('gulp-cssbeautify');
var sassbeautify = require('gulp-sassbeautify');
var server = require('gulp-server-livereload');

gulp.task('default', function() {
  // place code for your default task here
  runSequence('beautify-scss', 'sass', 'autoprefixer', 'minify-css')
});

gulp.task("sass", () => gulp.src([
  "./css/**/*.scss",
  "!./css/libs/**/*"
])
  .pipe(sass())
  .pipe(gulp.dest("./css")));
 
gulp.task("sass:watch", () => {
  gulp.watch([
    "./css/**/*.scss",
    "!./css/libs/**/*"
  ], ["sass"]);
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/min'));
});

gulp.task('autoprefixer', () =>
    gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
);

gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('css'));;
});

gulp.task('beautify-scss', function () {
  gulp.src('css/**/*.scss')
    .pipe(sassbeautify())
    .pipe(gulp.dest('css'))
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});