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
