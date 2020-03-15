#!/bin/sh

echo "API_URL=$API_URL"
sed "s|\"BUILD_BACKEND_API_URL\"|\"$API_URL\"|g" -i static/js/*.js

echo "LOGIN_URL=$LOGIN_URL"
sed "s|\"BUILD_BACKEND_LOGIN_URL\"|\"$LOGIN_URL\"|g" -i static/js/*.js

/bin/parent caddy --conf=/etc/Caddyfile --log=stdout --agree=$ACME_AGREE