import plumber from 'gulp-plumber'
import babel from 'gulp-babel';

export default {
  name: 'script',
  stream(gulp, config) {
    return gulp.src(config[this.name][0])
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest(config[this.name][1]))
  }
}
