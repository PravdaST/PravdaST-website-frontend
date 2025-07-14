# Clean Git History - Remove SendGrid API Key

## 🚨 Problem
GitHub Push Protection блокира push заради SendGrid API key в Git history:
- Commit `86c7655` - FINAL_SECURITY_CLEANUP.md:6
- Commit `2a1dc7f7` - replit.md:99

## 🔧 Solution: Interactive Rebase

### Method 1: Remove Commits with API Key
```bash
# Interactive rebase до commit преди проблемния
git rebase -i 5f6d464

# В текстовия editor:
# Промени "pick 2a1dc7f7" на "drop 2a1dc7f7" 
# Промени "pick 86c7655" на "drop 86c7655"
# Запази останалите commits

# Force push cleaned history
git push --force origin main
```

### Method 2: Edit Historical Commits  
```bash
# Rebase до проблемния commit
git rebase -i 2a1dc7f7~1

# Промени "pick 2a1dc7f7" на "edit 2a1dc7f7"
# Prompt ще спре на този commit

# Edit файла да премахне API key
nano replit.md
# Премахни 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

# Commit amended change
git add replit.md
git commit --amend --no-edit

# Continue rebase
git rebase --continue

# Force push
git push --force origin main
```

### Method 3: Fresh Start (Най-лесно)
```bash
# Create new branch без проблемните commits
git checkout 5f6d464
git checkout -b clean-main

# Copy всички файлове от current main (без .git)
git checkout main -- .

# Remove всички references към API key
# Edit всички .md файлове да премахнат SG.Njanuo2DReiXgG3kHaZqYQ.*

# Commit clean version
git add .
git commit -m "Security: Clean repository - all sensitive data in environment variables"

# Force push new clean history
git push --force origin clean-main:main
```

## ✅ GitHub Push Protection Override
Alternatively, GitHub предлага link за да allow secret:
https://github.com/PravdaST/PravdaST-website-frontend/security/secret-scanning/unblock-secret/2zrnjoAaRclwCk38DaOX9Rz4tJ2

Но препоръчвам да почистим историята вместо да allow-ваме secret.

## 🔍 Verification
След успешен push:
```bash
# Check че няма API key в history
git log --all --full-history -- "*" | grep -i "SG\."

# Трябва да върне празен резултат
```