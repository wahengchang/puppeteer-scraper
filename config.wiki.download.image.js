const cheerio = require('cheerio')
const {urlDomain} = require('./lib/string')
const downloader = require('./lib/download')
const childHelper = require('./lib/childHelper')


const argv = require('optimist').argv;
const TARGET_URL = argv.url
const TARGET_NAME = argv.name

const _name = TARGET_NAME || `wiki.download.image`
const name = `temp-${_name}-${new Date().getTime()}`
const url = TARGET_URL
const domain = urlDomain(url)

module.exports = {
  name,
  url,
  // isDownloadResource: true,
  // downloadResourceType: ['image'],
  // afterPageLoad: scrollDown,
  afterHtmlLoad: async function(html){
    const $ = cheerio.load(html);

    const imageUrl = $('.fullImageLink').find('a').attr('href')
    await downloader.toFile(imageUrl,`bigimage/${name}.jpg`)

    // await childHelper.execPromise(`rm -r ./${name}`)
  },
}