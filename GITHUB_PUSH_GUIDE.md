# GitHub Push Guide

Follow these steps to push your local project to GitHub.

## 1. Create a Repository on GitHub

1. Go to [GitHub.com](https://github.com/new).
2. Create a new repository (e.g., `my-portfolio`).
3. **Do not** initialize with README, .gitignore, or License (we already have them).

## 2. Push Local Code

Run the following commands in your terminal ( VS Code terminal):

```powershell
# 1. Add all files to staging
git add .

# 2. Commit your changes
git commit -m "Initial commit: Portfolio with Next.js 15, Tailwind v4, and i18n"

# 3. Rename branch to main (if not already)
git branch -M main

# 4. Link your local repo to GitHub (Replace URL with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. Push to GitHub
git push -u origin main
```

## 3. Verify

Refresh your GitHub repository page to see your code.
