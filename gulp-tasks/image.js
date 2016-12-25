// import lwip from 'gulp-lwip'

export default {
  name: 'image',
  stream(gulp, config) {
    return gulp.src(config[this.name][0])
      // .pipe(lwip.rescale(660))
      .pipe(gulp.dest(config[this.name][1]))
  }
}
