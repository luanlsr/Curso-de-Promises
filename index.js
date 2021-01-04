const fs = require ('fs')
const path = require ('path')
const basePath = './assets/'

console.log('Begin');

// const content = fs.readFileSync(path.resolve(basePath, 'invictus.txt'))
// console.log(content.toString());
const files = fs.readdirSync(path.resolve(basePath))

const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

for (const sentence of sentences){
    const text = fs.readFileSync(path.resolve(basePath, sentence)).toString()
    console.log(text, '\n');
}
console.log('End');
