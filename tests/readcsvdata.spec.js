const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

test('Read data from csv file', async ({page}) => {
  const csvFilePath = path.join(__dirname, '../Data/test1.csv');
  const csvData = fs.readFileSync(csvFilePath, 'utf8');

  const users = parse(csvData, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

//   expect(users).toEqual([
//     { username: 'admin', password: 'admin123' },
//     { username: 'admin1', password: 'admin123' },
//     { username: 'admin2', password: 'admin123' },
//   ]);

  console.log(users);
})