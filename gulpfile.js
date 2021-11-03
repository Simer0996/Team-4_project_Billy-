const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

const paths = {
    script: {
        src: './',
        dest: './build'
    }
};

async function includeHTML() {
    return gulp.src([
            '*.html',
            '*css',
            '!header.html', //ignore
            '!footer.html', //ignore
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.script.dest));
}

exports.default = includeHTML;


// const gulp = require('gulp');
// const fileinclude = require('gulp-file-include');
// ​
// const paths = {
//     script: {
//         src: './',
//         dest: './build'
//     }
// };
// ​
// async function includeHTML() {
//     return gulp.src([
//             '*.html',
//             '*css',
//             '*js',
//             '!gulpfile.js',
//             '!header.html', //ignore
//             '!footer.html', //ignore
//         ])
//         .pipe(fileinclude({
//             prefix: '@@',
//             basepath: '@file'
//         }))
//         .pipe(gulp.dest(paths.script.dest));
// }
// ​
// exports.default = includeHTML;