const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

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


function scripts() {
  return src([
     // kacaem jquery /npm i --save-dev jquery/
    // podklycaem jquery
    'node_modules/jquery/dist/jquery.min.js',
    'app/js/app.js',
  ])

.pipe(concat('app.min.js'))
.pipe(dest('app/js/'))
}

exports.browsersync = browsersync;
exports.scripts = scripts;