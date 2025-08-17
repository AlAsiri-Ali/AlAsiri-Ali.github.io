@echo off
echo =====================================
echo     Updating Jekyll Website
echo =====================================
echo.

REM Add Ruby to PATH
set PATH=C:\Ruby34-x64\bin;%PATH%

REM Navigate to website directory
cd /d "d:\projects\mywebsite\AlAsiri-Ali.github.io"

echo Updating Gems...
bundle update

echo.
echo All gems updated successfully!
echo You can now run the website using run_local.bat
pause
