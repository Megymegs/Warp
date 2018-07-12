

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    notify      = require('gulp-notify'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    cp          = require('child_process');






// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
        // port: 5000
    });
});


// Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix(['last 2 versions']))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'Sass task complete' }));
});

// JS task
gulp.task('js', function() {
    return gulp.src('js/**/*.js')
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'JS task complete' }));
});

// Watch scss files for changes & recompile
// Watch html/md files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch(['*.html']).on('change', browserSync.reload);
});


// Default task, running just `gulp` will compile the sass,
// compile the jekyll site, launch BrowserSync & watch files.
gulp.task('default', ['browser-sync', 'watch']);
