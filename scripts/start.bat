@echo off
REM ====================================
REM Jekyll Website Launcher
REM Ali AlAsiri's Website
REM ====================================

echo =====================================
echo    Starting Jekyll Website
echo =====================================
echo.

REM Add Ruby to PATH
set PATH=C:\Ruby34-x64\bin;%PATH%

REM Navigate to website directory
cd /d "%~dp0.."

echo Starting Jekyll server...
echo Website: http://localhost:4000
echo Press Ctrl+C to stop
echo.

REM Start Jekyll
set TZ=UTC
bundle exec jekyll serve --port 4000 --livereload

pause
