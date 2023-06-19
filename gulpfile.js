const gulp = require('gulp');
const sass =require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass( {
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("executando via gulp");
        callback();
    }, 2000);
}

function dizOi(callback) {
    setTimeout(function() {
    console.log("olá gulp");
    dizTchau();
    callback();
}, 1000);

function dizTchau() {
    console.log("tcahu gulp");
}
exports.default = gulp.parallel(funcaoPadrao, dizOi); 
exports.dizOi = dizOi;
exports.sass = compilaSass;
