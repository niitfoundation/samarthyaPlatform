#!/usr/bin/env sh

# wait-for-service.sh

set -e

host="$1"
port="$2"
cmd="$3"

echo 'Inspecting ' $host $port

until `telnet $host $port`; do
  >&2 echo "Service is unavailable - sleeping"
  sleep 5
done

>&2 echo "Service is now up, will execute " $cmd

exec $cmd