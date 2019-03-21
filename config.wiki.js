const {scrollDown} = require('./lib/browserHelper')
const cheerio = require('cheerio')
const {urlDomain, onlyCharDigit} = require('./lib/string')
const argv = require('optimist').argv;

const name = `wiki-temp`
const url = argv.rootUrl
const domain = urlDomain(url)
module.exports = {
  name,
  url,
  // isDownloadResource: true,
  // downloadResourceType: ['image'],
  afterPageLoad: scrollDown,
  afterHtmlLoad: async function(html){
    const $ = cheerio.load(html);
    const bigImagePageList = []

    $('.gallerybox').map(function(i, el) {
      const title = $(this).find('a').text()
      const url = $(this).find('a').attr('href')
      bigImagePageList.push({
        title: onlyCharDigit(title),
        url: `https://${domain}${url}`
      })
    })

    require('fs').writeFileSync(`./${name}/imageList.json`, JSON.stringify(bigImagePageList))
  },
}