# Puppeter-scraper
This is a repo of implemeneting a webs scraper, base on the amazing puppeeter.It comes with Chromium and runs “headless” by default. 

## Install 
```
$ npm install 
# or 
$ yarn install 
```

## Preparing configuration

creating yourown configuration to tell the scraper what to do.

`./config`
```js
const {scrollDown} = require('./lib/browserHelper')

module.exports = {
  name: `yahoo-${new Date().getTime()}`,
  url: 'https://yahoo.com/',
  isDownloadResource: true,
  }
}

```


## Generate Report
```
$ node script/generateReport.js --meta='./1552988325707-temp/meta.json' --output='./1552988325707-temp/report.json'
```

## Getting all cookies

return all cookies, inclueded httpOnly 

```
const cookies = await page._client.send('Network.getAllCookies');
```


## Reference 
 - [https://blog.kowalczyk.info/article/ea07db1b9bff415ab180b0525f3898f6/advanced-web-spidering-with-puppeteer.html](https://blog.kowalczyk.info/article/ea07db1b9bff415ab180b0525f3898f6/advanced-web-spidering-with-puppeteer.html)
 - [request function] (https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagegotourl-options)