# Git History Cleanup - Remove Sensitive Data

## 🚨 Problem
GitHub blocked push due to sensitive data in Git history.

## 🔧 Quick Fix Commands

Run these in terminal:

```bash
# 1. Start interactive rebase
git rebase -i 5f6d464

# 2. In editor: change "pick 2a1dc7f" to "edit 2a1dc7f"

# 3. When Git pauses, edit replit.md - remove any API keys

# 4. Amend the commit
git add replit.md
git commit --amend --no-edit

# 5. Continue rebase  
git rebase --continue

# 6. Force push
git push --force origin main
```

## ✅ Result
- Git history cleaned
- No sensitive data in repository
- All API keys moved to Vercel environment variables
- Push will succeed