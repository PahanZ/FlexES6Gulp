var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	del = require('del'),
	imagemin = require('gulp-imagemin');
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	babel = require("gulp-babel");


gulp.task('sass', function() {
    return gulp.src('app/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream: true}))
});


gulp.task('babel', ['cleanJS'], function () {
  return gulp.src("app/js/app.js")
    .pipe(babel({
    	presets: ['env']
    }))
    .pipe(gulp.dest("app/js/es5"))
    .pipe(browserSync.reload({stream: true}))
});


gulp.task('browserSync', function() {
    browserSync({
    	server: {
    		baseDir: 'app'
    	},
    	notify:false
    })
});

gulp.task('cleanJS', function() {
    return del.sync('app/js/es5');
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browserSync', 'sass', 'babel', 'img'], function() {
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', ['babel']);
    gulp.watch('app/js/*.js', browserSync.reload);
    gulp.watch('app/img/*', browserSync.reload)
});

gulp.task('build', ['clean', 'img', 'babel', 'sass'], function() {
    var buildCss = gulp.src(['app/css/main.css'])
    	.pipe(gulp.dest('dist/css'));
    var buildJs = gulp.src('app/js/es5/app.js')
    	.pipe(gulp.dest('dist/js'));
    var buildHtml = gulp.src('app/*.html')
      .pipe(gulp.dest('dist'));
});