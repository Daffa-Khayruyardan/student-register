// import some packages here
const { src, dest } = require('gulp');

// minify css file
function cssMinify() {
    return src('./public/style/style.css')
        .pipe()
        .pipe(dest('dist'));
}