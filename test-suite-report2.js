'use strict'

// multi server test report
// uses jest json outputfiles : NSS-crud-results.json NSS-wac-results.json
// from a folder for each server


const fs = require('fs')
const report = {}
const stats = {}

// report structure

// sub-totals are made by levels
const levels = ['SKIP','MUST', 'SHOULD', 'MAY', 'WPS'] //, 'undefined']
const serversRef = ['CSS', 'ESS', 'NSS', 'PHP']
const fileResults = ['crud-results.json', 'wac-results.json', 'webid-provider-tests']
const results = { passed: 0, failed: 0 , pending: 0, total: 0 }

// load fileResults by server
let servers = serversRef
for (let server in servers) {
  // test folder
  if (!fs.existsSync(`./${servers[server]}`)) {
    console.log(`no server : ./${servers[server]}`)
    //remove inexistant folders
    delete servers[server]
    console.log(servers)
    continue
  } else { console.log('server folder exists ./' + servers[server])}
  stats[servers[server]] = {}
  for (let file in fileResults) {
    // for each test file
    if (!fs.existsSync(`./${servers[server]}/${fileResults[file]}`)) {
      console.log(`no file : ./${servers[server]}/${fileResults[file]}`)
      continue
    }
    const rawData = fs.readFileSync(`./${servers[server]}/${fileResults[file]}`)
    let result = JSON.parse(rawData)
    result.testResults.forEach(item => {
        // for each test item
        item.assertionResults.forEach(item => {
          // build report
          const ancestors = [...item.ancestorTitles]
          const testName = [fileResults[file], ...ancestors, item.title]
          let level = levels.find(level => item.title.split(' ')[0] === level)
          if (!level) level = 'undefined'
          const id = level ? item.title.split(' ')[1] : ''
          const status = report[testName] ? report[testName] : { testfile: fileResults[file] , ancestors, title: item.title , level, id }
          status[servers[server]] = item.status
          report[testName] = status

          // build stats
          let total = servers[server] + fileResults[file] + 'total'
          let key = servers[server] + fileResults[file] + level
          if (!stats[total]) stats[total] = {
            server: servers[server],
            file: fileResults[file],
            level: 'total',
            result: {}, // results, // 
          }
          if (!stats[key]) stats[key] = {
            server: servers[server],
            file: fileResults[file],
            level,
            result: {}, // results, //{},
          }
          stats[total].result['total'] = stats[total].result['total'] ? stats[total].result['total'] + 1 : 1
          stats[total].result[item.status] = stats[total].result[item.status] ? stats[total].result[item.status] + 1 : 1
          stats[key].result['total'] = stats[key].result['total'] ? stats[key].result['total'] + 1 : 1
          stats[key].result[item.status] = stats[key].result[item.status] ? stats[key].result[item.status] + 1 : 1
          // if (!stats[servers[server]][fileResults[file]]) stats[servers[server]][fileResults[file]] = {}
          /*
          if (!stats[servers[server]][fileResults[file]]['total']) stats[servers[server]][fileResults[file]]['total'] = {}
          stats[servers[server]][fileResults[file]].total.total = stats[servers[server]][fileResults[file]].total.total ?  (stats[servers[server]][fileResults[file]].total.total + 1) : 1
          stats[servers[server]][fileResults[file]]['total'][item.status] = stats[servers[server]][fileResults[file]]['total'][item.status] ?  (stats[servers[server]][fileResults[file]]['total'][item.status] + 1) : 1
          if (!stats[servers[server]][fileResults[file]][level]) stats[servers[server]][fileResults[file]][level] = {}
          stats[servers[server]][fileResults[file]][level].total = stats[servers[server]][fileResults[file]][level].total ?  (stats[servers[server]][fileResults[file]][level].total + 1) : 1
          stats[servers[server]][fileResults[file]][level][item.status] = stats[servers[server]][fileResults[file]][level][item.status] ?  (stats[servers[server]][fileResults[file]][level][item.status] + 1) : 1
          */
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
/**
 * [{testFile, ancestors, title, level, id}]
 */
let arrayReport = Object.values(report)

// https://stackoverflow.com/questions/2784230/how-do-you-sort-an-array-on-multiple-columns
/**
 * sort array of object by Object keys
 * @param {object} keys
 */
Array.prototype.keySort = function(keys) {
  keys = keys || {};

  // via
  // https://stackoverflow.com/questions/5223/length-of-javascript-object-ie-associative-array
  var obLen = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  var obIx = function(obj, ix){ return Object.keys(obj)[ix]; }

  var keySort = function(a, b, d) {
    d = d !== null ? d : 1;
    // a = a.toLowerCase(); // this breaks numbers
    // b = b.toLowerCase();
    if (a == b) return 0;
    return a > b ? 1 * d : -1 * d;
  };

  var KL = obLen(keys);

  if (!KL) return this.sort(keySort);

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

/*const statsByFile = {}
for (const file in fileResults) {
  if (!statsByFile[[fileResults[file]]]) statsByFile[[fileResults[file]]] = {}
  for (const server in servers) {
    statsByFile[[fileResults[file]]][servers[server]] = stats[servers[server]][fileResults[file]]
  }
} */

// sort array of tests
let sortedReport = arrayReport.keySort({ testFile: 'asc', level: 'asc'})

// remove server with no result content
servers = serversRef
for (let server in serversRef) {
  if (!stats[serversRef[server]] || !Object.keys(stats[serversRef[server]]).length) {
    delete servers[server]
  }
}

// header
servers.forEach(server => { serverTitle = serverTitle + setStringLength(server, 14) })
let serversTitle = serverTitle
let reportContent = `\n${setStringLength('SOLID-TEST-SUITE REPORT', 60+4)}`

// summary
const arrayStats = Object.values(stats)

// summary by file
reportContent = reportContent + '\n\n1. SUMMARY by testFile'
summary('file')

// summary by server
reportContent = reportContent + '\n\n2. SUMMARY by server'
summary('server')

// unit tests
reportContent = reportContent + '\n\n3. UNIT TESTS by testFile and level'
sortedReport.forEach(test => {
  // break title on testFile
  if (testFile !== test.testfile) {
    if (testFile !== '') reportContent = reportContent + `\n\n${setStringLength('', 20)}${setStringLength(levelTitle + ' results', 44)}${totals(levelTitle)}`
      ancestor = ''
      ancestors = ''
      levelTitle = ''      
      testFile = test.testfile
      reportContent = reportContent +`\n\n${setStringLength(testFile, 60 + 4)}${serversTitle}`
    }
    // break title on level
    if (levelTitle !== test.level) {
      // print totals, init level sub-totals
      if (levelTitle !== '') {
    
        reportContent = reportContent + `\n\n${setStringLength('', 20)}${setStringLength(levelTitle + ' results', 44)}${totals(levelTitle)}`
      }
      levelTitle = test.level
      ancestor = ''
      reportContent = reportContent + `\n\n ${levelTitle}`
    }
    // break title on ancestors[0]
    if (ancestor !== test.ancestors[0]) {
      ancestor = test.ancestors[0]
      reportContent = reportContent +'\n  ' + ancestor
    }
    if (ancestors !== test.ancestors.slice(1).toString()) {
      ancestors = test.ancestors.slice(1).join(' > ')
      if (ancestors) reportContent = reportContent +'\n   ' + ancestors
    }
    let result = ''
    servers.forEach(server => {
      test[server] ? '' : test[server]
      result = result + setStringLength(test[server], 14)
    })
    // TODO split test.title on last space from length 60
    if (test.title.length > 60) {
      // console.log(str.slice(0, 6).substring(0, str.slice(0, 6).lastIndexOf('z')));
      const firstLine = test.title.slice(0, 60).substring(0, test.title.slice(0, 60).lastIndexOf(' '))
      reportContent = reportContent + '\n    ' + setStringLength(firstLine, 60)
      reportContent = reportContent + '\n    ' + setStringLength(test.title.split(firstLine)[1], 60) + result
    } else {
      reportContent = reportContent + '\n    ' + setStringLength(test.title, 60) + result
    }
  })
  reportContent = reportContent + `\n\n${setStringLength('', 20)}${setStringLength(levelTitle + ' results', 44)}${totals(levelTitle)}`

// print
console.log(reportContent)
fs.writeFile('test-suite-report.txt', reportContent + '\n', function(err) {
  if(err) console.log(err)
})

// format output
function setStringLength (item, length) {
  if (!item) item = ''
  let itemString = item.substring(0, length-1)
  return  itemString + ' '.repeat(length - itemString.length)
}

// extract sub-totals by level
function totals (levelTitle) {
  let sums = ''
  servers.forEach(server => {
    let res = ''
    let totals = [0, 0, 0, 0]
    if (stats[server][testFile] && stats[server][testFile][levelTitle]) {
      stats[server][testFile][levelTitle] = Object.assign({}, results, stats[server][testFile][levelTitle])
      totals = Object.values(stats[server][testFile][levelTitle])
      reportContent = reportContent + '\n' + JSON.stringify(totals)
    }

    totals.forEach( item => {
      res = res === '' ? `${item.toString()}` : `${res}/${item.toString()}`
    })
    sums = sums + setStringLength(res, 14)
  })
  return sums
}

function summary (item) {
  let item1 = item
  let item2 = item === 'file' ? 'server' : 'file'
  let sort = {}
  sort[item1] = 'asc'
  sort[item2] = 'asc'
  let sortedStats = arrayStats.keySort(sort) // { item1: 'asc', item2: 'asc' })
  // console.log(sortedStats)
  // return sortedStats
  let filereport = ''
  let serverReport = ''
  for (const statItem in sortedStats) {
    sortedStats[statItem].result = Object.assign({}, results, sortedStats[statItem].result)
    if (filereport !== sortedStats[statItem][item1]) {
      reportContent = reportContent +'\n\n' + sortedStats[statItem][item1]
      filereport = sortedStats[statItem][item1]
    }
    if (serverReport !== sortedStats[statItem][item2]) {
      reportContent = reportContent + '\n  ' + sortedStats[statItem][item2]
      serverReport = sortedStats[statItem][item2]
    }
    reportContent = reportContent + '\n    ' + setStringLength(sortedStats[statItem].level, 14) + JSON.stringify(sortedStats[statItem].result)
  }
}
// summary by which ever order od servers, fileResults, levels
/* function summary (item1, item2) {
  item1.forEach(item => {
    // reportContent = reportContent +'\n\n' + item
    let itemHeader = ''
    item2.forEach(subItem => {
      // reportContent = reportContent + '\n' + setStringLength('  ' + subItem, 20)
      let server, file
      if (item === servers) {
        server = item
        file = subItem
      } else {
        server = subItem
        file = item
      }
      // console.log(server +' '+ file + stats)
      if (stats[server]) {
        if (stats[server][file]) {
          if (itemHeader === '') {
            reportContent = reportContent +'\n\n' + item
            itemHeader = item
          }
          reportContent = reportContent + '\n' + setStringLength('  ' + subItem, 20)
          Object.keys(stats[server][file]).forEach(level => {
            stats[server][file][level] = Object.assign({}, results, stats[server][file][level])
            reportContent = reportContent +'\n       ' + setStringLength('  ' + level, 14) + JSON.stringify(stats[server][file][level])
          })
        }
      }
    })
  })
} */
