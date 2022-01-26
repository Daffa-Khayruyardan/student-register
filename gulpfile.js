// make simple gulpfile to minify js and css file

// import some packages here
const { src, dest, series } = require('gulp');
const gulpCleanCss = require('gulp-clean-css');
const gulpTerser = require('gulp-terser');
const gulpBabel = require('gulp-babel');

// minify css file
function cssMinify() {
    return src('./public/style/style.css')
        .pipe(gulpCleanCss())
        .pipe(dest('dist'));
}

// transppile js file
function jsTranspile() {
    return src('./public/scripts/*.js')
        .pipe(gulpBabel())
        .pipe(dest('dist'));
}

// minify js file
function jsMinify() {
    return src('./public/scripts/*.js')
        .pipe(gulpTerser())
        .pipe(dest('dist'));
}

// set default task for gulp
exports.default = series(
    cssMinify,
    jsTranspile,
    jsMinify
)
