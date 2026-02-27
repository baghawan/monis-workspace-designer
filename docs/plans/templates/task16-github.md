# Task 16: GitHub + Add Bot

## Commands

### Step 1: Create GitHub repo

```bash
gh repo create monis-workspace-designer --public --source=. --description="monis.rent Workspace Designer - 3D office rental tool"
```

### Step 2: Add desent-bot

```bash
gh repo edit monis-workspace-designer --add-collaborator desent-bot
```

### Step 3: Commit

```bash
git add .
git commit -m "chore: push to GitHub with desat-bot collaborator"
```
