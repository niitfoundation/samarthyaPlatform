#!/usr/bin/env sh

# wait-for-service.sh

set -e

host="$1"
port="$2"
svc="$3"

echo 'Inspecting ' $host $port

while ! nc -z $host $port; do sleep 3; done

# Additional time to wait till all topics are up
sleep 20s

>&2 echo "Service is now up, will execute npm run " $svc

npm run $svc