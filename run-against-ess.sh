#!/bin/bash
set -e

#npm ci

#export SERVER_ROOT=http://localhost:3000
#export ALICE_WEBID_DOC=${SERVER_ROOT}/profile.ttl
#export ALICE_WEBID=$ALICE_WEBID_DOC#me
#curl -X PUT $ALICE_WEBID_DOC -H 'Content-Type: text/turtle' -d "<$ALICE_WEBID> <http://www.w3.org/ns/pim/space#storage> </>."

#npm run jest -- --verbose --json --outputFile="../test-suite/CSS/crud-results.json"

export CURL_RESULT=`curl -i https://solidcommunity.net/login/password -d"username=solidtestsuite&password=Testing123" | grep Set-Cookie`
export COOKIE=`expr "$CURL_RESULT" : '^Set-Cookie:\ \(.*\).'`
echo $COOKIE
export SERVER_ROOT=https://solidcommunity.net
export STORAGE_ROOT=https://pod-compat.inrupt.com/solidtestsuite/solidtestsuite
export ALICE_WEBID=https://solidtestsuite.solidcommunity.net/profile/card#me
export SKIP_WPS=1
#export DEBUG=*
#env
#./node_modules/.bin/jest test/surface/
npm run jest -- --verbose --json --outputFile="../test-suite/ESS/crud-results.json"

