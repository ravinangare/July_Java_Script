const XLSX = require('xlsx')

function readExcel(filePath){
    const workBook = XLSX.readFile(filePath);
    const sheetName = workBook.SheetNames[0]
    const sheet = workBook.Sheets[sheetName]
    return XLSX.utils.sheet_to_json(sheet)
}


module.exports = {readExcel}