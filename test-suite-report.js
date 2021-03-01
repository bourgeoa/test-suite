'use strict'

// multi server test report
// uses jest json outputfiles : NSS-crud-results.json NSS-wac-results.json in a folder for each server


const fs = require('fs')
const report = {}
const stats = {}

// report structure
const levels = ['SKIP','MUST', 'SHOULD', 'MAY', 'undefined']
let servers = ['NSS', 'CSS', 'ESS']
const fileResults = ['crud-results.json', 'wac-results.json', 'webid-provider-tests']

// load fileResults by server
for (let server in servers) {
  // test folder
  if (!fs.existsSync(`./${servers[server]}`)) {
    console.log(`no server : ./${servers[server]}`)
    // servers = servers.filter(item => item !== servers[server])
    delete servers[server]
    console.log(servers)
    continue
  } else { console.log('server folder exists ./' + servers[server])}
  stats[servers[server]] = {}
  for (let file in fileResults) {
    // test file
    if (!fs.existsSync(`./${servers[server]}/${fileResults[file]}`)) {
      console.log(`no file : ./${servers[server]}/${fileResults[file]}`)
      continue
    }
    const rawData = fs.readFileSync(`./${servers[server]}/${fileResults[file]}`)
    let result = JSON.parse(rawData)
    // for each testfile
    result.testResults.forEach(item => {
        // for each test item
        item.assertionResults.forEach(item => {
          // report
          const ancestors = [...item.ancestorTitles]
          const testName = [fileResults[file], ...ancestors, item.title]
          let level = levels.find(level => item.title.split(' ')[0] === level)
          if (!level) level = 'undefined'
          const id = level ? item.title.split(' ')[1] : ''
          const status = report[testName] ? report[testName] : { testfile: fileResults[file] , ancestors, title: item.title , level, id }
          status[servers[server]] = item.status
          report[testName] = status

          // stats
          /* if (!stats[servers[server]]['total']) stats[servers[server]]['total'] = {}
          stats[servers[server]].total.total = stats[servers[server]].total.total ?  (stats[servers[server]].total.total + 1) : 1
          stats[servers[server]]['total'][item.status] = stats[servers[server]]['total'][item.status] ?  (stats[servers[server]]['total'][item.status] + 1) : 1
          if (!stats[servers[server]][level]) stats[servers[server]][level] = {}
          stats[servers[server]][level].total = stats[servers[server]][level].total ?  (stats[servers[server]][level].total + 1) : 1
          stats[servers[server]][level][item.status] = stats[servers[server]][level][item.status] ?  (stats[servers[server]][level][item.status] + 1) : 1
          */
          if (!stats[servers[server]][fileResults[file]]) stats[servers[server]][fileResults[file]] = {}
          if (!stats[servers[server]][fileResults[file]]['total']) stats[servers[server]][fileResults[file]]['total'] = {}
          stats[servers[server]][fileResults[file]].total.total = stats[servers[server]][fileResults[file]].total.total ?  (stats[servers[server]][fileResults[file]].total.total + 1) : 1
          stats[servers[server]][fileResults[file]]['total'][item.status] = stats[servers[server]][fileResults[file]]['total'][item.status] ?  (stats[servers[server]][fileResults[file]]['total'][item.status] + 1) : 1
          if (!stats[servers[server]][fileResults[file]][level]) stats[servers[server]][fileResults[file]][level] = {}
          stats[servers[server]][fileResults[file]][level].total = stats[servers[server]][fileResults[file]][level].total ?  (stats[servers[server]][fileResults[file]][level].total + 1) : 1
          stats[servers[server]][fileResults[file]][level][item.status] = stats[servers[server]][fileResults[file]][level][item.status] ?  (stats[servers[server]][fileResults[file]][level][item.status] + 1) : 1
        })
      })
  }
}

// report
let ancestor = ''
let ancestors = ''
let testFile = ''
let serverTitle = ''
let levelTitle = ''
let totals = []
let arrayReport = Object.values(report)

// https://stackoverflow.com/questions/2784230/how-do-you-sort-an-array-on-multiple-columns
Array.prototype.keySort = function(keys) {
  // function keySort (report, keys) {  
    keys = keys || {};
  
    // via
    // https://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
    var obLen = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    };
  
    var obIx = function(obj, ix){ return Object.keys(obj)[ix]; }
  
    var keySort = function(a, b, d) {
        d = d !== null ? d : 1;
        // a = a.toLowerCase(); // this breaks numbers
        // b = b.toLowerCase();
        if (a == b)
            return 0;
        return a > b ? 1 * d : -1 * d;
    };
  
    var KL = obLen(keys);
  
    if (!KL)
        return this.sort(keySort);
  
    for ( var k in keys) {
        // asc unless desc or skip
        keys[k] = 
                keys[k] == 'desc' || keys[k] == -1  ? -1 
              : (keys[k] == 'skip' || keys[k] === 0 ? 0 
              : 1);
    }
  
    this.sort(function(a, b) {
        var sorted = 0, ix = 0;
  
        while (sorted === 0 && ix < KL) {
            var k = obIx(keys, ix);
            if (k) {
                var dir = keys[k];
                sorted = keySort(a[k], b[k], dir);
                ix++;
            }
        }
        return sorted;
    });
    return this;
  };
  

let sortedReport = arrayReport.keySort({ testFile: 'asc', level: 'asc'})
// console.log(report)
/* const sortMethod = sortMethodWithDirectionMultiColumn(
  [
    { column: "level", direction: "desc" },
    { column: "testFile", direction: "asc" },
  ]
);
let sortedReport = arrayReport.sort(sortMethod); */
// console.log(sortedReport)

// header
servers.forEach(server => { serverTitle = serverTitle + itemWrite(server, 7) })
let serversTitle = serverTitle // itemWrite('level', 7) + serverTitle
let reportContent = `\n${itemWrite('SOLID-TEST-SUITE REPORT', 60+4)}`

// summary
servers.forEach(server => {
  reportContent = reportContent +'\n\n' + server
  Object.keys(stats[server]).forEach(file => {
    reportContent = reportContent + '\n' + itemWrite('  ' + file, 20)
    // Object.keys(stats[server]).forEach(level => {
    Object.keys(stats[server][file]).forEach(level => {
      reportContent = reportContent +'\n       ' + itemWrite('  ' + level, 10) + JSON.stringify(stats[server][file][level])
    })
  })
})

// unit tests
sortedReport.forEach(test => {
    // break title on testFile
    if (testFile !== test.testfile) {
      ancestor = ''
      ancestors = ''
      levelTitle = ''      
      testFile = test.testfile
      reportContent = reportContent +`\n\n${itemWrite(testFile, 60 + 4)}${serversTitle}`
    }
    // break title on level
    if (levelTitle !== test.level) {
      // print totals, init level sub-totals
      if (levelTitle !== '') {
        reportContent = reportContent + `\n\n${itemWrite('', 20)}${itemWrite(levelTitle + ' results', 40)}`
      }
      totals = []
      levelTitle = test.level
      ancestor = ''
      reportContent = reportContent + `\n\n ${levelTitle}`
      totals = []
    }
    // break title on ancestors[0]
    if (ancestor !== test.ancestors[0]) {
      ancestor = test.ancestors[0]
      reportContent = reportContent +'\n  ' + ancestor
    }
    if (ancestors !== test.ancestors.slice(1).toString()) {
      ancestors = test.ancestors.slice(1).join(' > ')
      reportContent = reportContent +'\n   ' + ancestors
    }
    let result = ''
    servers.forEach(server => {
      test[server] ? '' : test[server]
      result = result + itemWrite(test[server], 7)
    })
    // reportContent = reportContent +'\n    ' + itemWrite(test.title, 60) + itemWrite(test.level, 7) + result
    reportContent = reportContent +'\n    ' + itemWrite(test.title, 60) + result
  })
  reportContent = reportContent + `\n\n${itemWrite('', 20)}${itemWrite(levelTitle + ' results', 40)}`
  // }
  // reportContent = reportContent + '\n\n'
// print
console.log(reportContent)
fs.writeFile('test-suite-report.txt', reportContent, function(err) {
  if(err) console.log(err)
})


// format output
function itemWrite (item, length) {
  if (!item) item = ''
  let itemString = item.substring(0, length-1)
  return  itemString + ' '.repeat(length - itemString.length)
}
