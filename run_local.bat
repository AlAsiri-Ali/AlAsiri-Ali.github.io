@echo off
echo =====================================
echo    Starting Ali's Jekyll Website
echo =====================================
echo.

REM Add Ruby to PATH
set PATH=C:\Ruby34-x64\bin;%PATH%

REM Navigate to website directory
cd /d "d:\projects\mywebsite\AlAsiri-Ali.github.io"

echo Checking Ruby version...
ruby --version
echo.

echo Starting Jekyll server...
echo Website will be available at: http://localhost:4000
echo Press Ctrl+C to stop the server
echo.

REM Start Jekyll
bundle exec jekyll serve --port 4000 --livereload

echo.
echo Server stopped
pause
