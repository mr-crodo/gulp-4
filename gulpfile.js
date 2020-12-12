const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');
const browserSync = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    // uvidomlenie
    notify: false,
    // ? esli net interneta to postav false
    online: true

  })
}

exports.browsersync = browsersync;