const fetch = require('node-fetch');
const fs = require('fs');
const website = 'https://ramses.casino';

const files = [
  {
    nameToSave: './src/css/style.css',
    toGet: '/css/style.css',
  },
  {
    nameToSave: './src/js/script.js',
    toGet: '/js/script.js',
  },
  {
    nameToSave: './src/index.html',
    toGet: '',
  },
];

files.forEach(async file => {
  const url = `${website}${file.toGet}`;
  const response = await fetch(url);
  const result = await response.text();

  fs.writeFileSync(file.nameToSave, result, error => {
    if (error) throw console.error(error);
  });
});

const gettingFiles = files.map(item => `\`${item.nameToSave}\``).join(',\n');

console.log(`Files:\n${gettingFiles}\n - has been updated!`)
