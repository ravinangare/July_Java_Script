const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

function readCSV(filePath){
    const csvData = fs.readFileSync(filePath, 'utf8');
    
      const users = parse(csvData, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
      });
      return users;
}
module.exports = {readCSV}