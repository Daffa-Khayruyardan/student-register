// import gulp tool packages
const { src, dest, watch, series } = require('gulp');
const path = require('path');
const gulpSass = require('gulp-sass');
const gulpEjs = require('gulp-ejs');
const gulpCleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// make browser sync gulp task 
function browserHost(cb) {
    browsersync.init({
        server: {
            baseDir: './src'
        }
    }) ;

    // make call back for this function
    cb();
}

// make browser hot reload
function browserReload(cb) {
    browsersync.reload();

    // make call back for this function
    cb();
}

// make sass compile and minify task
function sassMinify() {
    return src('./src/scss/main.scss')
        .pipe(gulpSass)
        .pipe(gulpCleanCss())
        .pipe(dest('public/style'));
}

// make javascript compile and minify task
function jsMinify() {
    return src('./src/js/main.js')
        .pipe()
        .pipe(dest('public/scripts'))
}

// run all task in gulp
exports.default = series(
    
);