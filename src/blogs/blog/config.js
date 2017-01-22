const CollectionPageGenerator = require('diz-plugin-collection-page-generator');
const magu = require('magu');
const hljs = require('magu-plugin-hljs');
const {highlight, highlightAuto} = require('highlight.js');
const Renderer = require('../../..');

module.exports = {
  id: 'urn:uuid:cc67c5e0-db48-11e6-bc24-0d48f33b2d8d',
  title: 'Minimalist',
  description: 'Minimalist is Diz theme',
  url: 'https://nju33.github.io/diz-theme-minimalist/',
  author: 'nju33',
  theme: {
    Renderer,
    config: {
      'base': '/diz-theme-minimalist'
    }
  },
  compile(contents) {
    return new Promise((resolve, reject) => {
      magu({
        code(code, lang) {
          return `
<pre>
  <code class="aaa lang-${lang}">${highlight(lang, code).value}</code>
</pre>
          `
        }
      }, [
        // hljs()
      ]).process(contents)
      .then(result => {
        resolve(result.html);
      })
      .catch(err => {
        reject(err);
      });
    });
  },
  plugins: [
    new CollectionPageGenerator({pager: 30})
  ]
};
