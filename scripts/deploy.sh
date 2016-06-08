#!/usr/bin/env bash
echo "DEPLOY"
echo "VERSION"
s3cmd --version

HASH=`cat dist/bundle.js | shasum | awk '{print substr($0,0,5)}'`
mv dist/bundle.js dist/bundle-$HASH.js
cp index.html dist/index.html
./node_modules/html-minifier/cli.js dist/index.html > dist/index2.html --collapse-whitespace --minify-css --minify-js --remove-attribute-quotes --use-short-doctype
mv dist/index2.html dist/index.html
sed -i -e "s/\/static\/bundle\.js/http\:\/\/dyclrq6t27il\.cloudfront\.net\/bundle-$HASH\.js/g" dist/index.html
gzip dist/index.html
mv dist/index.html.gz dist/index.html

echo $test_variable
echo "HASH"
echo $HASH

s3cmd --access_key=$s3_access_key --secret_key=$s3_secret_key \
  sync dist/ s3://tiny-808.com
s3cmd --access_key=$s3_access_key --secret_key=$s3_secret_key \
  modify s3://tiny-808.com/bundle-$HASH.js --add-header=Cache-Control:max-age=315360000
s3cmd --access_key=$s3_access_key --secret_key=$s3_secret_key \
  modify s3://tiny-808.com/index.html --add-header=Content-Encoding:gzip
s3cmd --access_key=$s3_access_key --secret_key=$s3_secret_key \
  modify s3://tiny-808.com/index.html --add-header=Content-Type:text/html
