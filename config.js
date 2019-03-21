const {scrollDown} = require('./lib/browserHelper')

module.exports = {
  name: `yahoo-${new Date().getTime()}`,
  url: 'https://tw.mall.yahoo.com/',
  isDownloadResource: true,
  downloadResourceType: ['script'],
  afterPageLoad: scrollDown,
  afterHtmlLoad: async function(html){
    console.log(html)
  },
}