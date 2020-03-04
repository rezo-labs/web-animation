const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const bs = require('browser-sync').create(); // create a browser sync instance

// File paths
const SCSS_PATH = 'scss/*.scss';
const JS_PATH = 'js/*.js';


// Sass task: compiles the style.scss file into style.css
function scssTask(){    
    return gulp.src(SCSS_PATH)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(gulp.dest('dist')
    ); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return gulp.src([
        JS_PATH
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
        ])
        .pipe(concat('index.js'))
        .pipe(babel({
            presets: ['@babel/env']
          }))
        .pipe(uglify())
        .pipe(gulp.dest('dist')
    );
}



gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    gulp.watch([SCSS_PATH, JS_PATH], 
        gulp.series(
            gulp.parallel(scssTask, jsTask),
            bs.reload
        )
    );    
}

gulp.task('compile', gulp.parallel(scssTask, jsTask))
gulp.task('watch', watchTask);

// gulp.task('watch', function () {
//     gulp.watch("*.html").on('change', bs.reload);
//     gulp.watch("css/*.css").on('change', bs.reload);
//     gulp.watch("js/*.js").on('change', bs.reload);
//     gulp.watch("scss/*.scss").on('change',bs.reload);
// });

