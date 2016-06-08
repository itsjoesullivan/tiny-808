#!/usr/bin/env bash
echo "INSTALL"
npm install

wget -O- -q http://s3tools.org/repo/deb-all/stable/s3tools.key | sudo apt-key add -
sudo wget -O/etc/apt/sources.list.d/s3tools.list http://s3tools.org/repo/deb-all/stable/s3tools.list
sudo apt-get update

sudo apt-get install s3cmd=1.5.0
