var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var imageop = require('gulp-image-optimization');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('images', function(cb) {    
	gulp.src(['img/**/*.png','img/**/*.jpg','img/**/*.gif','img/**/*.jpeg'])
	.pipe(imageop({        optimizationLevel: 5,        progressive: true,        interlaced: true    }))
	.pipe(gulp.dest('img/build'))
	.on('end', cb)
	.on('error', cb);
});

gulp.task('compressjs', function() {  
	gulp.src('_/components/js/*.js')    
	.pipe(uglify())    
	.pipe(gulp.dest('js'));
});

gulp.task('compass', function() {  
	gulp.src('_/components/sass/*.scss')    
	.pipe(compass({      
		config_file: './config.rb',      
		css: '_/css',      
		sass: '_/components/sass'    }))    
		.pipe(gulp.dest('_/css'));});

gulp.task('html', function() {
	  gulp.src('./*.html');
});

gulp.task('watch', function() {
	  gulp.watch('_/components/js/*.js', ['compressjs']);
	  gulp.watch('_/components/sass/*.scss', ['compass']);
	  gulp.watch('./*.html',['html']);
});


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['images', 'compressjs', 'compass', 'html','webserver', 'watch']);