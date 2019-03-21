const {scrollDown} = require('./lib/browserHelper')

module.exports = {
  name: `yahoo-${new Date().getTime()}`,
  url: 'https://login.yahoo.com/',
  isDownloadResource: true,
  downloadResourceType: [],
  afterPageLoad: scrollDown,
  afterHtmlLoad: async function(html){
    // console.log(html)
  },
}