
(async () => {
  const argv = require('optimist').argv;
  const listener = require('../lib/listener')
  const fs = require('fs')
  const puppeteer = require('puppeteer');

  const CONFIG_FILE = argv.config || './config'
  const config = require(`${__dirname}/.${CONFIG_FILE}`)

  const {url, name: projectName, isDownloadResource, downloadResourceType, afterPageLoad, afterHtmlLoad} = config

  const uniqueName = () => {
    return projectName || new Date().getTime()
  }

  try {
    const tp = uniqueName()
    const dir = `${projectName}`
    fs.mkdirSync(`./${dir}`)

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log('[INFO] Going to page: ', url)

    await listener.requestInterceptor(page, {
      dir: `${dir}/`,
      isDownloadResource, downloadResourceType
    })

    await page.goto(url, {waitUntil: 'networkidle0'});

    if(afterPageLoad)
      await afterPageLoad(page);

    const html = await page.content();
    if(afterHtmlLoad)
      await afterHtmlLoad(html);
    

    fs.writeFileSync(`./${dir}/index.html`, html)
    console.log('[INFO] created index.html')
    fs.writeFileSync(`./${dir}/meta.json`, JSON.stringify(page.locals['reqObj']))
    console.log('[INFO] created meta.json')
    await page.screenshot({path: `./${dir}/${tp}-screenshot.png`});
    await browser.close();
    console.log('[INFO] done, browser closed')
  }
  catch(err){
    console.log('[ERROR]', err)
  }
})();