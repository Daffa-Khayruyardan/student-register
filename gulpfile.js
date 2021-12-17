// import some packages here
const { src, dest, series } = require('gulp');
const gulpCleanCss = require('gulp-clean-css');
const gulpTerser = require('gulp-terser');

// minify css file
function cssMinify() {
    return src('./public/style/style.css')
        .pipe(gulpCleanCss())
        .pipe(dest('dist'));
}

// transpile and minify js file
function jsMinify() {
    return src('./public/scripts/*.js')
        .pipe()
        .pipe()
        .pipe(dest('dist'));
}

// set default task for gulp
exports.default = series(
    cssMinify,
    jsMinify
)