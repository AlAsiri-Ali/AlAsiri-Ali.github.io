# How to Run Jekyll Website Locally

## Running Methods:

### 1. Using Windows Batch File:
- Double-click on `run_local.bat`
- Terminal will open and start the website automatically

### 2. Using PowerShell:
- Double-click on `start_website.ps1`
- Or in PowerShell: `.\start_website.ps1`

### 3. Manual Terminal Commands:
```powershell
$env:PATH = "C:\Ruby34-x64\bin;" + $env:PATH
cd "d:\projects\mywebsite\AlAsiri-Ali.github.io"
bundle exec jekyll serve
```

## Helper Files:

- `run_local.bat` - Start website (Windows)
- `start_website.ps1` - Start website (PowerShell)
- `update_gems.bat` - Update gems

## Important Links:

- Local website: http://localhost:4000
- To stop server: Press `Ctrl+C`

## Troubleshooting:

1. Run `update_gems.bat` first
2. If it doesn't work, type in PowerShell:
   ```
   bundle install
   gem install tzinfo-data
   ```

---
**Note:** Make sure Ruby is installed in `C:\Ruby34-x64\`
