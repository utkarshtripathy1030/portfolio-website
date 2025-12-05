# 📋 Copy-Paste Terminal Commands

## All commands you need - Just copy and paste!

---

## 🚀 SETUP (First Time Only)

### Step 1: Navigate to Project Folder
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
```

### Step 2: Install All Dependencies
```powershell
npm install
```
⏱️ Takes 1-2 minutes - let it finish!

### Step 3: Start the Server
```powershell
npm run dev
```

✅ You should see:
```
🚀 Server running on http://localhost:3000
📁 Environment: development
Press Ctrl+C to stop the server
```

### Step 4: Open Website
Visit in browser: http://localhost:3000

---

## 🎮 COMMON COMMANDS

### Start Server (Development with auto-restart)
```powershell
npm run dev
```

### Start Server (Production)
```powershell
npm start
```

### Stop Server
```powershell
Ctrl + C
```
(Press Ctrl and C together)

### Reinstall Dependencies
```powershell
npm install
```

### Update All Packages
```powershell
npm update
```

### Install New Package
```powershell
npm install package-name
```

### Check Node Version
```powershell
node --version
```

### Check NPM Version
```powershell
npm --version
```

---

## 🌐 DEPLOYMENT COMMANDS

### Deploy to Vercel
```powershell
npm install -g vercel
vercel
```

### Deploy to Heroku
```powershell
npm install -g heroku
heroku login
heroku create your-app-name
git push heroku main
```

### Deploy to Railway
1. Visit https://railway.app
2. Connect GitHub
3. Deploy with UI (no commands needed)

---

## 🧪 TESTING COMMANDS

### Test API Endpoint (Get Projects)
```powershell
curl http://localhost:3000/api/projects
```

### Test API Endpoint (Get Portfolio)
```powershell
curl http://localhost:3000/api/portfolio
```

### Check What's on Port 3000
```powershell
netstat -ano | findstr :3000
```

---

## 🛠️ TROUBLESHOOTING COMMANDS

### Kill Process on Port 3000
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

### Use Different Port
```powershell
set PORT=3001 & npm start
```

### Clear npm Cache
```powershell
npm cache clean --force
```

### Reinstall from Scratch
```powershell
rmdir node_modules -Force -Recurse
Remove-Item package-lock.json
npm install
```

---

## 📂 FILE EDITING COMMANDS

### Open Folder in VS Code
```powershell
code .
```

### Open File in Notepad
```powershell
notepad src/routes/portfolio.js
```

### List All Files
```powershell
Get-ChildItem -Recurse
```

### Change Directory
```powershell
cd src
cd routes
cd ..
```

---

## 🔐 GIT COMMANDS (Optional)

### Initialize Git Repository
```powershell
git init
```

### Add All Files
```powershell
git add .
```

### Make First Commit
```powershell
git commit -m "Initial portfolio website"
```

### View Commit History
```powershell
git log
```

### Check Status
```powershell
git status
```

---

## 📊 MONITORING COMMANDS

### Watch Server Logs
```powershell
npm run dev
```
(Already shows logs)

### Monitor File Changes
```powershell
npm run dev
```
(Nodemon automatically restarts on changes)

### Check Running Processes
```powershell
Get-Process node
```

---

## 🔄 WORKFLOW COMMANDS

### 1. Start Fresh (Complete Clean)
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
rmdir node_modules -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
```

### 2. Normal Development Start
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
npm run dev
```

### 3. Production Test
```powershell
npm start
```

### 4. Check Everything
```powershell
node --version
npm --version
npm list
```

---

## 💾 ENVIRONMENT VARIABLE COMMANDS

### Edit .env File
```powershell
notepad .env
```

### View .env File
```powershell
Get-Content .env
```

### Set Environment Variable (Session Only)
```powershell
$env:PORT = 3001
npm start
```

### Set Environment Variable (Permanent in PowerShell)
```powershell
[Environment]::SetEnvironmentVariable("PORT", "3001", "User")
```

---

## 🧹 CLEANUP COMMANDS

### Remove node_modules
```powershell
rmdir node_modules -Force -Recurse
```

### Remove package-lock.json
```powershell
Remove-Item package-lock.json
```

### Remove .env
```powershell
Remove-Item .env
```

### Restore to Original State
```powershell
rmdir node_modules -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install
```

---

## 📱 QUICK REFERENCE

| What You Want | Command |
|--------------|---------|
| Start dev | `npm run dev` |
| Stop server | `Ctrl + C` |
| Install deps | `npm install` |
| Run production | `npm start` |
| Check Node | `node --version` |
| Fix port error | `set PORT=3001 & npm start` |
| Clean install | `rmdir node_modules -r -fo; npm install` |
| Open in editor | `code .` |
| View logs | Shows in terminal |

---

## 🎯 DAILY COMMANDS

**Day 1: Setup**
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
npm install
npm run dev
```

**Day 2-7: Development**
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
npm run dev
# Edit files
# Ctrl + C to stop
```

**Deployment Day**
```powershell
npm install -g vercel
vercel
```

---

## ✅ VERIFICATION COMMANDS

### All Setup Correct?
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
node --version
npm --version
npm list express
```

Expected output:
```
v18.x.x or higher
9.x.x or higher
express@4.18.2 (or similar)
```

### Server Running?
```powershell
# Open another PowerShell window
curl http://localhost:3000
```

Expected: HTML page content

### API Working?
```powershell
curl http://localhost:3000/api/portfolio
```

Expected: JSON data

---

## 🆘 EMERGENCY COMMANDS

### Everything Broken? Reset!
```powershell
# Stop current server (Ctrl+C)

# Navigate
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"

# Deep clean
Remove-Item node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Fresh install
npm install

# Start fresh
npm run dev

# Test
# Open http://localhost:3000
```

### Port Stuck?
```powershell
# Find what's using port 3000
Get-NetTCPConnection -LocalPort 3000

# Kill it
Stop-Process -Name node -Force -ErrorAction SilentlyContinue

# Try port 3001 instead
set PORT=3001 & npm start
```

### Lost Files?
```powershell
# Check what's in folder
Get-ChildItem -Recurse | Select-Object FullName

# Make sure you're in right folder
Get-Location

# Files should be in:
# C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website
```

---

## 💡 Pro Tips

✅ **Always run from project directory**
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
```

✅ **Keep one PowerShell window for server**
- Open another for running other commands

✅ **Copy exact paths with quotes**
```powershell
# Right
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"

# Wrong
cd C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website
```

✅ **Use Tab to autocomplete**
- Type first few letters and press Tab

✅ **Use Up/Down arrows for history**
- Access previous commands

---

## 🎓 Learn These

These are the commands you'll use most:

```powershell
# Navigation
cd "your/path/here"                    # Change folder
Get-Location                           # Show current folder
Get-ChildItem                          # List files

# Node/NPM
npm install                            # Install packages
npm run dev                            # Start dev server
npm start                              # Start prod server

# Process Control
Ctrl + C                               # Stop running command
$env:PORT = 3001                       # Set environment variable
```

---

## 🚀 You're Ready!

You now have every command you need!

**Common workflow:**
1. Open PowerShell
2. `cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"`
3. `npm run dev`
4. Open `http://localhost:3000`
5. Edit files (they auto-reload)
6. `Ctrl + C` to stop

**That's it!** 🎉

---

**Save this file for quick reference!**

**Questions?** Check README.md or START_HERE.md
