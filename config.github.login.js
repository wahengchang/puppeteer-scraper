const {scrollDown} = require('./lib/browserHelper')

const email = 'youemail@github.com'
const password = 'password'

const sleep = (s) => new Promise((resolve)=> setTimeout(resolve, s*1000))

module.exports = {
  name: `github-${new Date().getTime()}`,
  url: 'https://github.com/',
  // isDownloadResource: true,
  // downloadResourceType: [],
  isDownloadCookies: true,
  afterPageLoad: scrollDown,
  beforeGotoPage: async function(page){
    await page.goto('https://github.com/login');
    await page.type('#login_field', email);
    await page.type('#password', password);
    await page.click('input[type=submit]');
    await sleep(2)
  }
}