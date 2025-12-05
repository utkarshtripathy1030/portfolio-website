#!/bin/bash
# Start script for portfolio website (for reference on non-Windows systems)
# Windows users: Use "npm run dev" or "npm start" instead

echo "Starting Portfolio Website Backend..."
echo "======================================"
echo ""
echo "Installing dependencies if needed..."
npm install

echo ""
echo "Starting server..."
npm run dev

echo ""
echo "Server should be running at http://localhost:3000"
echo "Press Ctrl+C to stop"
