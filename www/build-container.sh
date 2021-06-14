#!/usr/bin/env bash

set -e
set -o pipefail
set -v

echo "stackbit-build.sh: start build"
CI_REGISTRY_IMAGE="registry.digitalocean.com/watheia/waweb-pwa:v0alpha1"

# Build container
docker buildx build apps/pwa --tag ${CI_REGISTRY_IMAGE}
docker push ${CI_REGISTRY_IMAGE}
echo "stackbit-build.sh: finished build"
