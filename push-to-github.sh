#!/bin/bash

# Add remote (if not already added)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/Jintoki/Portfolio2026.git

# Check current branch and rename to main if needed
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    git branch -M main
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Code pushed to https://github.com/Jintoki/Portfolio2026"
echo ""
