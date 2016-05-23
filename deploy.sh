webpack -p
HASH=`cat dist/bundle.js | shasum | awk '{print substr($0,0,5)}'`
mv dist/bundle.js dist/bundle-$HASH.js
cp index.html dist/index.html
sed -i -e "s/\/static\/bundle\.js/http\:\/\/dyclrq6t27il\.cloudfront\.net\/bundle-$HASH\.js/g" dist/index.html
rm dist/index.html-e
