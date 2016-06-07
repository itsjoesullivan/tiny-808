#!/usr/bin/env bash
echo "DEPLOY"

s3cmd sync dist/ s3://tiny-808.com
s3cmd modify s3://tiny-808.com/bundle-$HASH.js --add-header=Cache-Control:max-age=315360000
s3cmd modify s3://tiny-808.com/index.html --add-header=Content-Encoding:gzip
s3cmd modify s3://tiny-808.com/index.html --add-header=Content-Type:text/html
