var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

gulp.task('css', function(){
	gulp.src('css/global.scss')
    .pipe(plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(autoprefixer({
		 browsers: ['last 10 versions']
	}))
	.pipe(gulp.dest('css/'))
});

gulp.task('watch', function(){
	gulp.watch('css/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);
