// import gulp tool packages
const { src, dest, watch, series } = require('gulp');
const path = require('path');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpEjs = require('gulp-ejs');
const gulpCleanCss = require('gulp-clean-css');
const gulpJsMinify = require('gulp-minify');
const browserSync = require('browser-sync').create();

// make browser sync gulp task 
function browserHost(cb) {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    }) ;

    // make call back for this function
    cb();
}

// make browser hot reload
function browserReload(cb) {
    browserSync.reload();

    // make call back for this function
    cb();
}

// make ejs compile and minify task
function ejsMinify() {
    return src('src/views/*.ejs')
        .pipe(gulpEjs('src/views/*.ejs'))
        .pipe(dest('dist'));
}

// make sass compile and minify task
function sassMinify() {
    return src('src/scss/*.scss')
        .pipe(gulpSass())
        .pipe(gulpCleanCss())
        .pipe(dest('dist'));
}

// make javascript compile and minify task
function jsMinify() {
    return src('src/js/*.js')
        .pipe(gulpJsMinify())
        .pipe(dest('dist'));
}

// make watch task to all compile process
function watchAll() {
    watch(['src/scss/*.scss', 'src/js/*.js', 'src/views/*.ejs'], series(sassMinify, jsMinify, ejsMinify, browserReload));
}

// run all task in gulp
exports.default = series(
    sassMinify,
    jsMinify,
    browserHost,
    watchAll
);