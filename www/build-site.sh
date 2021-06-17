#!/usr/bin/env bash

set -e
set -o pipefail
set -v

echo "stackbit-build.sh: start build"

CI_REGISTRY_IMAGE="registry.digitalocean.com/watheia/waweb-pwa:v0alpha1"
# fetch data from DatoCMS through datocms-pull
yarn --cwd apps/pwa \
  dlx @stackbit/datocms-pull \
  --ssg gatsby \
  --datocms-access-token \
  $DATOCMS_ACCESS_TOKEN


# Clear existing artifacts
rm -rf apps/pwa/public
rm -rf apps/pwa/.cache

# build site for production
NODE_ENV=production yarn nx run pwa:build \
  --configuration=production \
  --prefixPaths \
  --with-deps \
  --profile

echo "stackbit-build.sh: finished build"
