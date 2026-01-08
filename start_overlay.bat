@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

REM =========================
REM CeeJay Overlay Launcher
REM =========================

REM -------------------------
REM Go to overlay folder
REM -------------------------
cd /d "%~dp0overlay"

REM -------------------------
REM Install dependencies (only if needed)
REM -------------------------
if not exist node_modules (
    echo node_modules not found, installing dependencies...
    npm install
) else (
    echo Dependencies already installed.
)

REM -------------------------
REM Start the overlay
REM -------------------------
start "" cmd /k "npm start"

REM -------------------------
REM Open control panel
REM -------------------------
start "" http://localhost:3000/controlpanel

echo Overlay launched successfully!
pause

ENDLOCAL
