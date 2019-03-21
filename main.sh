# rootUrl=https://commons.wikimedia.org/wiki/Category:Paintings_of_the_Azuchi%E2%80%93Momoyama_period
# rootUrl=https://commons.wikimedia.org/wiki/Nanban
rootUrl=https://commons.wikimedia.org/wiki/Category:Kan%C5%8D_Dom

node scraper/base.js --config=./config.wiki.js --rootUrl=$rootUrl

count=0
jq -c '.[]' wiki-temp/imageList.json | while read i; do
  title=`echo $i | jq '.title' -r`
  url=`echo $i | jq '.url' -r`

  echo process: $count
  echo [INFO] $ node scraper/base.js --config=./config.wiki.download.image.js --name=${title} --url=${url}
  node scraper/base.js --config=./config.wiki.download.image.js --name=$title --url="$url"
  count=$((count+1))
done