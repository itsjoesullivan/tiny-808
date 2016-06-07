NODE_ENV=production webpack -p --config webpack.production.config.js
HASH=`cat dist/bundle.js | shasum | awk '{print substr($0,0,5)}'`
mv dist/bundle.js dist/bundle-$HASH.js
cp index.html dist/index.html
html-minifier dist/index.html > dist/index2.html --collapse-whitespace --minify-css --minify-js --remove-attribute-quotes --use-short-doctype
mv dist/index2.html dist/index.html
sed -i -e "s/\/static\/bundle\.js/http\:\/\/dyclrq6t27il\.cloudfront\.net\/bundle-$HASH\.js/g" dist/index.html
#exit
rm dist/index.html-e
gzip dist/index.html
mv dist/index.html.gz dist/index.html
s3cmd sync dist/ s3://tiny-808.com
s3cmd modify s3://tiny-808.com/bundle-$HASH.js --add-header=Cache-Control:max-age=315360000
s3cmd modify s3://tiny-808.com/index.html --add-header=Content-Encoding:gzip
s3cmd modify s3://tiny-808.com/index.html --add-header=Content-Type:text/html
