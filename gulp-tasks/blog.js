import path from 'path';
import Renderer from '../lib/minimalist';

const renderer = new Renderer({
  config: {
    base: process.cwd() + '/src/blogs/'
  },
  sites: {
    blog: {
      title: 'Minimalist',
      description: 'A Diz theme',
      url: 'http://example.com'
    }
  }
});

export default {
  name: 'blog',
  stream(gulp, config) {
    renderer.load().then(({render, bundle}) => {
      render().pipe(gulp.dest(config[this.name][1]));
      bundle(handleBundler.bind(null, gulp));
    });
  }
}

function handleBundler(gulp, err, stream) {
  if (err) {
    console.log(err);
    return;
  }
  stream.pipe(gulp.dest('local/'));
}
