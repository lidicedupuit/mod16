const gulp = require('gulp');
const sass =require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglife = require('gulp-uglife');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/script/*.js')
    .pipe(uglife())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/script'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass( {
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
   
}

function dizOi(callback) {
    setTimeout(function() {
    console.log("olá gulp");
    dizTchau();
    callback();
}, 1000);
}
function dizTchau() {
    console.log("tchau gulp");
}
exports.default = gulp.parallel(funcaoPadrao, dizOi); 
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;