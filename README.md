
## Ex 1
```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  const html = await page.content();

  require('fs').writeFileSync('page.html', html)

  await browser.close();
})();
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