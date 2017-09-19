var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean'),
	imgRetina = require('gulp-img-retina');

	var retinaOpts = {

	}




gulp.task('copy', ['clean'], function(){
	return gulp.src('src/**/*')
	.pipe( gulp.dest('dist') );	
});

gulp.task('clean', function(){
	return gulp.src('dist')
	.pipe( clean() );
});

gulp.task('build-img', ['copy'], function(){
	gulp.src('src/images/**/*')
	.pipe( imagemin([
		imagemin.optipng({optmizationLevel:1})
	],{
		verbose:true
	}) )
	.pipe( gulp.dest('dist/images') );
});


gulp.task('retina', ['build-img'], function(){

	return gulp.src('dist/**/*.html')
	.pipe(imgRetina(retinaOpts))
	.on('error', function(e){
		console.log(e.message);
	})
	.pipe(gulp.dest('./dist'));


});

