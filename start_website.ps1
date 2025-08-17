# Start Jekyll Website for Ali AlAsiri
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "   Starting Ali's Jekyll Website" -ForegroundColor Cyan  
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Add Ruby to PATH
$env:PATH = "C:\Ruby34-x64\bin;" + $env:PATH

# Navigate to website directory
Set-Location "d:\projects\mywebsite\AlAsiri-Ali.github.io"

Write-Host "Checking Ruby version..." -ForegroundColor Yellow
ruby --version
Write-Host ""

Write-Host "Starting Jekyll server..." -ForegroundColor Green
Write-Host "Website will be available at: http://localhost:4000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

try {
    # Start Jekyll with live reload
    bundle exec jekyll serve --port 4000 --livereload
}
catch {
    Write-Host "Error occurred: $_" -ForegroundColor Red
    Write-Host "Try running: bundle install" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Server stopped" -ForegroundColor Red
Read-Host "Press Enter to exit"
