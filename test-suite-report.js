'use strict'

// multi server test report
// uses jest json outputfiles : NSS-crud-results.json NSS-wac-results.json in a folder for each server


const fs = require('fs')
const report = {}
const stats = {}

// report structure
const levels = ['SKIP','MUST', 'SHOULD', 'MAY']
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
          if (!stats[servers[server]]['total']) stats[servers[server]]['total'] = {}
          stats[servers[server]].total.total = stats[servers[server]].total.total ?  (stats[servers[server]].total.total + 1) : 1
          stats[servers[server]]['total'][item.status] = stats[servers[server]]['total'][item.status] ?  (stats[servers[server]]['total'][item.status] + 1) : 1
          if (!stats[servers[server]][level]) stats[servers[server]][level] = {}
          stats[servers[server]][level].total = stats[servers[server]][level].total ?  (stats[servers[server]][level].total + 1) : 1
          stats[servers[server]][level][item.status] = stats[servers[server]][level][item.status] ?  (stats[servers[server]][level][item.status] + 1) : 1
        })
      })
  }
}

// report
let ancestor = ''
let ancestors = ''
let testFile = ''
let serverTitle = ''

// header
servers.forEach(server => { serverTitle = serverTitle + itemWrite(server, 7) })
let serversTitle = itemWrite('level', 7) + serverTitle
let reportContent = `\n${itemWrite('SOLID-TEST-SUITE REPORT', 60+4)}`

// summary
servers.forEach(server => {
  reportContent = reportContent +'\n\n' + server
  Object.keys(stats[server]).forEach(level => {
    reportContent = reportContent +'\n' + itemWrite('  ' + level, 12) + JSON.stringify(stats[server][level])
  })
})

// unit tests
for (let test in report) {
  if (testFile !== report[test].testfile) {
    testFile = report[test].testfile
    reportContent = reportContent +`\n\n${itemWrite(testFile, 60 + 4)}${serversTitle}`
  }
  if (ancestor !== report[test].ancestors[0]) {
    ancestor = report[test].ancestors[0]
    reportContent = reportContent +'\n\n  ' + ancestor
  }
  if (ancestors !== report[test].ancestors.slice(1).toString()) {
    ancestors = report[test].ancestors.slice(1).join(' > ')
    reportContent = reportContent +'\n   ' + ancestors
  }
  let result = ''
  servers.forEach(server => {
    report[test][server] ? '' : report[test][server]
    result = result + itemWrite(report[test][server], 7)
  })
  reportContent = reportContent +'\n    ' + itemWrite(report[test].title, 60) + itemWrite(report[test].level, 7) + result
}

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

