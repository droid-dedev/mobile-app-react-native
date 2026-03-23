import { Parser } from 'core/data/parser';

class FileParser {
  constructor() {
    this.parser = new Parser();
  }

  parseFile(filename) {
    return new Promise((resolve, reject) => {
      const fs = require('fs');
      const readline = require('readline');
      const filePath = `data/${filename}`;
      const fileStream = fs.createReadStream(filePath);

      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      let fileData = '';

      rl.on('line', (line) => {
        fileData += line + '\n';
      });

      rl.on('close', () => {
        const jsonData = JSON.parse(fileData);
        resolve(jsonData);
      });

      rl.on('error', (err) => {
        reject(err);
      });
    });
  }
}

module.exports = FileParser;