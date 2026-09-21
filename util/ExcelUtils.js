class ExcelUtils{
    static readSheet(filePath, SheetName){
        const workbook = XLSX.readFile(filePath);
        const workSheet = workbook.Sheets[SheetName]
        if(!workSheet){
            throw new Error(`Sheet "${sheetName}" not found`)
        }
        return XLSX.utils.sheet_to_json(workSheet)
    }
    static getSheetNames(filePath){
           const workbook = XLSX.readFile(filePath);
           return workbook.SheetNames;
    }

    static readAllSheets(filePath){
          const workbook = XLSX.readFile(filePath);
          const allData = {}
          workbook.SheetNames.forEach(sheetName =>{
            const workSheet = workbook.Sheets[sheetName]
            allData[sheetName] = XLSX.utils.sheet_to_json(workSheet)
          })
          return allData;
    }
}

module.exports = ExcelUtils;