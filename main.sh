# rootUrl=https://commons.wikimedia.org/wiki/Category:Paintings_of_the_Azuchi%E2%80%93Momoyama_period
rootUrl=https://commons.wikimedia.org/wiki/Category:Paintings_of_the_Azuchi%E2%80%93Momoyama_period

node scraper/base.js --config=./config.wiki.js --rootUrl=$rootUrl

jq -c '.[]' wiki-temp/imageList.json | while read i; do
  title=`echo $i | jq '.title' -r`
  url=`echo $i | jq '.url' -r`
  echo ${title}
  echo ${url}
  echo node scraper/base.js --config=./config.wiki.download.image.js --name=${title} --url=${url}
  node scraper/base.js --config=./config.wiki.download.image.js --name=$title --url="$url"

  echo going to remove temp-$title
done