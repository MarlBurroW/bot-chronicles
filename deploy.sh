#!/bin/bash
# Build and deploy bot-chronicles locally (served by systemd + Traefik)
set -e
cd "$(dirname "$0")"
echo "Building..."
npm run build
echo "Build complete! Site in dist/"
echo "Restart service: sudo systemctl restart bot-chronicles"
