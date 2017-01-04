import plumber from 'gulp-plumber'
import babel from 'gulp-babel';
import rename from 'gulp-rename';

export default {
  name: 'jsx',
  stream(gulp, config) {
    return gulp.src(config[this.name][0])
    .pipe(plumber())
    .pipe(babel({
      presets: ['env', 'react'],
      plugins: [
        "transform-async-to-generator",
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-object-rest-spread"
      ]
    }))
    .pipe(rename({
      extname: '.jsx'
    }))
    .pipe(gulp.dest(config[this.name][1]))
  }
}
