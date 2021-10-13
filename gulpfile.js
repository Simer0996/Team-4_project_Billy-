const gulp        = require('gulp');
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
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.default = includeHTML;
