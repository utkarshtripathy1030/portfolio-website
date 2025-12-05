@echo off
REM Portfolio Website - Setup Script for Windows PowerShell
REM Run this script to set everything up automatically

echo.
echo ========================================
echo   PORTFOLIO WEBSITE - SETUP SCRIPT
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [✓] Node.js detected: 
node --version

echo.
echo [1/3] Installing dependencies...
echo ========================================
call npm install

if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo [2/3] Setup complete!
echo ========================================
echo.
echo [3/3] Starting server...
echo ========================================
echo.

npm run dev

echo.
echo.
echo If you see "Server running on http://localhost:3000"
echo then your website is LIVE! Open your browser and visit:
echo.
echo   http://localhost:3000
echo.
echo Press Ctrl+C in this window to stop the server
echo.
pause
