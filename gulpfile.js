var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var rename = require('gulp-rename');


// gulp.task('browser-sync', function () {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

// Title used for system notifications
var notifyInfo = {
    title: 'Gulp'
};

// Error notification settings for plumber
var plumberErrorHandler = {
    errorHandler: notify.onError({
        title: notifyInfo.title,
        icon: notifyInfo.icon,
        message: 'Error: <%= error.message %>'
    })
};

gulp.task('html', function () {
    gulp.src('keyscreens/*.html')
        .pipe(gulp.dest('./_dist'));
});

gulp.task('js', function () {
    gulp.src('./js/main.js')
        .pipe(babel({
            "presets": ["@babel/preset-env"]
        }))
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('vue', function () {
    return gulp.src('./vueComponents/*.js')
    .pipe(babel({
        "presets": ["@babel/preset-env"]
    }))
    .pipe(gulp.dest('vueCompiled'));
});

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix({
            browsers: ['> 1%', 'last 3 versions', 'Firefox >= 20', 'iOS >=7']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./css'))
        // .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("keyscreens/*.html", ['html']);
    gulp.watch("js/*.js", ['js']);
    gulp.watch("./vueComponents/*.js", ['vue']);
    // gulp.watch("keyscreens/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'html', 'js', /*'browser-sync',*/ 'watch']);