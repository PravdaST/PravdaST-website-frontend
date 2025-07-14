# Replace Repository Files - Quick Fix

## 🎯 Goal: Clean push без Git history проблеми

### Method: Replace Repository Content

#### Step 1: Download Clean Files
```bash
# Download всички files от GitHub като ZIP
# https://github.com/PravdaST/PravdaST-website-frontend/archive/refs/heads/main.zip

# Extract в нова папка и copy само файловете (без .git)
```

#### Step 2: Replace Current Repository
```bash
# Backup current work
cp -r . ../workspace-backup

# Keep current files, reset Git
git checkout 5f6d464  # Last good commit before API key
git reset --hard

# Copy всички current clean files обратно
cp -r ../workspace-backup/* .
rm -rf ../workspace-backup/.git

# Remove API key references from документация
grep -r "SG\.Njanuo2DReiXgG3kHaZqYQ" . --exclude-dir=.git
# Edit всички files които показват API key
```

#### Step 3: Clean Commit
```bash
git add .
git commit -m "Security: Clean repository - remove all hardcoded credentials"
git push origin main
```

## ⚡ Fastest Solution
```bash
# Simply allow GitHub secret за този път
# Click link: https://github.com/PravdaST/PravdaST-website-frontend/security/secret-scanning/unblock-secret/2zrnjoAaRclwCk38DaOX9Rz4tJ2

# След push, създай нов commit който премахва API key от документацията
git add .
git commit -m "Docs: Remove example API keys from documentation files"
git push origin main
```

Така GitHub ще приеме първия push, а втория commit ще почисти документацията.