const gulp = require("gulp");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer")({ grid: true });
const perfectionist = require("perfectionist");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
sass.compiler = require("node-sass");
const plugins = [
    autoprefixer,
    perfectionist({
        colorCase: "upper",
        trimLeadingZero: false
    })
];

gulp.task("default", () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // gulp.watch("script/es6/*.js", gulp.series("babel"));
    gulp.watch("style/scss/*.scss", gulp.series("sass"));
    // gulp.watch("style/prefixer/*.scss", gulp.series("sass"));
});

gulp.task("prefixer", () => {
    return gulp
        .src("style/scss/*.scss")
        .pipe(postcss(plugins))
        .pipe(gulp.dest("style/prefixer"));
});

gulp.task("sass", () => {
    return gulp
        .src("style/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write("../../sourcemaps"))
        .pipe(gulp.dest("style/css"))
        .pipe(browserSync.stream());
});

gulp.task("babel", () => {
    return gulp
        .src("script/es6/*.js")
        .pipe(
            babel({
                presets: ["@babel/env"],
                retainLines: true
            })
        )
        .pipe(gulp.dest("script/js"));
});
