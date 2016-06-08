#!/usr/bin/env bash
echo "DEPLOY"

ls


s3cmd --access_key=$s3_access_key --secret_key=$s3_secret_key \
  sync dist/ s3://tiny-808.com
s3cmd --access_key=$s3_access_key --secret_key=$s3_secret_key \
  modify s3://tiny-808.com/bundle-$HASH.js --add-header=Cache-Control:max-age=315360000
s3cmd --access_key=$s3_access_key --secret_key=$s3_secret_key \
  modify s3://tiny-808.com/index.html --add-header=Content-Encoding:gzip
s3cmd --access_key=$s3_access_key --secret_key=$s3_secret_key \
  modify s3://tiny-808.com/index.html --add-header=Content-Type:text/html
