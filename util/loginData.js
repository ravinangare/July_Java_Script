const ExcelUtils = require('../util/ExcelUtils')
const filePath = 'C://Users//GR0002TU//July Java script//Data//test2.xlsx'

const loginData = ExcelUtils.(filePath,"Sheet1")
console.log(loginData)