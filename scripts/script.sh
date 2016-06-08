#!/usr/bin/env bash
echo "SCRIPT"
NODE_ENV=production webpack -p --config webpack.production.config.js
