var gulp = require('gulp')

var minifycss = require('gulp-minify-css'), // CSS压缩
    concat = require('gulp-concat'), // 合并文件      
    rename = require('gulp-rename'), // 重命名
    imagemin = require('gulp-imagemin'); //图片压缩

gulp.task('img', function(){
    gulp.src('src/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest('public/img'))
})

gulp.task('css', function(){
    gulp.src('src/css/*.css')
        .pipe(concat('style.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css'))
})
