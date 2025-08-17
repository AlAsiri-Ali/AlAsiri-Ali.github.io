# 🚀 Quick Start Guide - Ali's Jekyll Website

## 🎯 Easy Launch Methods

### Method 1: PowerShell Script (Recommended)
```powershell
.\launch_website.ps1
```

### Method 2: Batch File (Simple)
```cmd
.\quick_start.bat
```

### Method 3: Manual Commands
```powershell
# Add Ruby to PATH
$env:PATH = "C:\Ruby34-x64\bin;" + $env:PATH

# Install gems
bundle install

# Start website
$env:TZ = "UTC"; bundle exec jekyll serve --port 4000 --livereload
```

## 📍 Access Your Website
- **Local URL**: http://localhost:4000
- **Network URL**: http://0.0.0.0:4000

## 🛑 Stop the Server
Press `Ctrl + C` in the terminal

## 🔧 Troubleshooting

### If Ruby is not found:
1. Make sure Ruby is installed at `C:\Ruby34-x64\bin`
2. Or install Ruby from: https://rubyinstaller.org/downloads/

### If gems fail to install:
```powershell
bundle update
bundle install
```

### If timezone errors occur:
```powershell
gem install tzinfo-data
```

## 📝 Recent Changes (August 17, 2025)
- ✅ Fixed timezone issues on Windows
- ✅ Removed problematic `wdm` gem  
- ✅ Added `tzinfo-data` for Windows compatibility
- ✅ Updated card designs for better text clarity
- ✅ Removed blur effects for improved readability

## 🎨 Card Design Updates
- Clear black transparent backgrounds
- Bright white text without shadows
- Removed blur effects
- Enhanced hover animations
- Better mobile responsiveness

---

**Happy coding! 🎉**
