const ghpages = require('gh-pages');

console.log('Start to publish...');

ghpages.publish('dist', err => {
  if (err) {
    console.log(err);
  }

  console.log('Published!');
});
