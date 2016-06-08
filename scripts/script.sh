#!/usr/bin/env bash

echo "SCRIPT"

NODE_ENV=production ./node_modules/webpack/bin/webpack.js -p --config webpack.production.config.js

HASH=`cat dist/bundle.js | shasum | awk '{print substr($0,0,5)}'`
mv dist/bundle.js dist/bundle-$HASH.js
cp index.html dist/index.html
./node_modules/html-minifier/cli.js dist/index.html > dist/index2.html --collapse-whitespace --minify-css --minify-js --remove-attribute-quotes --use-short-doctype
mv dist/index2.html dist/index.html
sed -i -e "s/\/static\/bundle\.js/http\:\/\/dyclrq6t27il\.cloudfront\.net\/bundle-$HASH\.js/g" dist/index.html
gzip dist/index.html
mv dist/index.html.gz dist/index.html
