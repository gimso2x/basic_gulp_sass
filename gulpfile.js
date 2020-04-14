var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

function css() {
	var sassOptions = {
		outputStyle: "expanded" // nested, expanded, compact, compressed
		,indentType: "tab" // space, tab
		,indentWidth: 1
		,precision: 8 // 소수점 자리수
		// , sourceComments: true // 코멘트 추가 여부
	}
	var prefixerOptions = {
		overrideBrowserslist: ["> 5%", "Firefox > 1", "last 2 versions"]
    }
    var path = {
        sassPath: "./src/assets/css/*.scss",
        cssPath: "./public/assets/css/"
    }

    return gulp.src(path.sassPath)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(gulp.dest(path.cssPath));
}

gulp.watch('./src/assets/css/**/*.scss', css);

exports.default = css;