#!/usr/bin/env bash
echo "DEPLOY"
echo $test_variable

s3cmd sync dist/ s3://tiny-808.com --access_key=$s3_access_key --secret_key=$s3_secret_key
s3cmd modify s3://tiny-808.com/bundle-$HASH.js --add-header=Cache-Control:max-age=315360000 --access_key=$s3_access_key --secret_key=$s3_secret_key
s3cmd modify s3://tiny-808.com/index.html --add-header=Content-Encoding:gzip --access_key=$s3_access_key --secret_key=$s3_secret_key
s3cmd modify s3://tiny-808.com/index.html --add-header=Content-Type:text/html --access_key=$s3_access_key --secret_key=$s3_secret_key
