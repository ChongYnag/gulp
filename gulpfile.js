/*
* @Author: jiangchongyang
* @Date:   2017-03-17 14:11:48
* @Last Modified by:   jiangchongyang
* @Last Modified time: 2017-03-17 15:26:39
*/
var gulp = require('gulp');	
var	webserver =  require("gulp-webserver");

// 引入gulp
var gulp = require('gulp');             // 基础库

// 引入gulp插件
var htmlmin = require('gulp-htmlmin');// 压缩html
    imagemin = require('gulp-imagemin');//压缩图片
    uglify = require('gulp-uglify');//压缩JS
    cleanCSS = require('gulp-clean-css');//格式CSS

//压缩HTML
gulp.task('html', function() {
  return gulp.src('*.html') // 指明源文件路径、并进行文件匹配
  	.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist')); // 输出路径
});
//压缩图片
gulp.task('imagemin',function(){
	return gulp.src('img/*')
	.pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
})
//压缩js
gulp.task('uglify',function(){
	return gulp.src(['js/*.js'])
	.pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})
//压缩css
gulp.task('cleanCSS', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});
// 默认任务
gulp.task('default',['html','imagemin','uglify','cleanCSS']);
