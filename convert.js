const fs = require('fs')
const path = require('path')
var util = require('util')
const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
csv()  
  .fromFile(csvFilePath)
  .on('end_parsed',(jsonObj)=>{
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), util.inspect(jsonObj, { showHidden: true, depth: null, maxArrayLength: null }), 'utf-8')
  })
  .on('done',(error)=>{
      console.log('end')
  })