var minify = require('gulp-minify');
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var ext_replace = require('gulp-ext-replace');

gulp.task('default', function() {
    gulp.src('src/*.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist'));
        //es5 support
         gulp.src(['src/polyfills/*.js', 'src/*.js'])
        .pipe(concat('tiny-router.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ext_replace('.es5.js'))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist/es5 support'));
});