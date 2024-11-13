
# Git Branching Guide

This guide provides essential Git branching commands, from creating branches to merging, rebasing, and deleting them.

## Table of Contents
- [Initialize a Git Repository](#initialize-a-git-repository)
- [Check Current Branch](#check-current-branch)
- [Create a New Branch](#create-a-new-branch)
- [Switch to a Branch](#switch-to-a-branch)
- [List All Branches](#list-all-branches)
- [Push a Branch to Remote](#push-a-branch-to-remote)
- [Pull from a Branch](#pull-from-a-branch)
- [Merge a Branch](#merge-a-branch)
- [Fast-Forward Merge](#fast-forward-merge)
- [Non-Linear Merge (with Conflict Resolution)](#non-linear-merge-with-conflict-resolution)
- [Rebase a Branch](#rebase-a-branch)
- [Delete a Branch](#delete-a-branch)
- [Rename a Branch](#rename-a-branch)
- [Set Upstream Tracking for a Branch](#set-upstream-tracking-for-a-branch)

---

### Initialize a Git Repository

To start, if you haven’t already, initialize a repository:
```bash
git init
```

### Check Current Branch

To see which branch you’re currently on:
```bash
git branch
```

### Create a New Branch

To create a new branch (e.g., `feature-branch`):
```bash
git branch feature-branch
```

### Switch to a Branch

To switch to a specific branch (e.g., `feature-branch`):
```bash
git checkout feature-branch
```

Alternatively, create and switch to a branch in one command:
```bash
git checkout -b feature-branch
```

### List All Branches

To see all branches in the repository:
```bash
git branch
```

### Push a Branch to Remote

To push your branch to a remote repository (e.g., `origin`):
```bash
git push origin feature-branch
```

### Pull from a Branch

To pull updates from a branch on the remote repository into your current branch:
```bash
git pull origin feature-branch
```

### Merge a Branch

To merge another branch (e.g., `feature-branch`) into the current branch:
1. First, switch to the branch you want to merge into (e.g., `main`):
   ```bash
   git checkout main
   ```
2. Then, merge the branch:
   ```bash
   git merge feature-branch
   ```

### Fast-Forward Merge

Git will automatically do a **fast-forward merge** if there’s a linear path. Just follow the same steps as above to merge.

### Non-Linear Merge (with Conflict Resolution)

If there are conflicts when merging, Git will prompt you to resolve them manually. After resolving conflicts in your text editor:
1. Stage the resolved files:
   ```bash
   git add <filename>
   ```
2. Complete the merge:
   ```bash
   git commit
   ```

### Rebase a Branch

To rebase your current branch onto another branch (e.g., rebase `feature-branch` onto `main`):
1. Switch to the branch you want to rebase:
   ```bash
   git checkout feature-branch
   ```
2. Run the rebase command:
   ```bash
   git rebase main
   ```

### Delete a Branch

To delete a branch locally (e.g., `feature-branch`):
```bash
git branch -d feature-branch
```

If the branch hasn’t been merged and you still want to delete it:
```bash
git branch -D feature-branch
```

To delete a branch on the remote (e.g., `origin`):
```bash
git push origin --delete feature-branch
```

### Rename a Branch

To rename the branch you’re currently on:
```bash
git branch -m new-branch-name
```

To rename another branch:
```bash
git branch -m old-branch-name new-branch-name
```

### Set Upstream Tracking for a Branch

To set the remote branch as the upstream tracking branch:
```bash
git push -u origin feature-branch
```

---

## Summary of Commands

Here’s a quick-reference list of the commands above:

```bash
git init                               # Initialize a repository
git branch feature-branch              # Create a new branch
git checkout feature-branch            # Switch to a branch
git checkout -b feature-branch         # Create and switch to a new branch
git branch                             # List all branches
git push origin feature-branch         # Push branch to remote
git pull origin feature-branch         # Pull updates from a branch
git checkout main                      # Switch to main branch
git merge feature-branch               # Merge feature-branch into main
git rebase main                        # Rebase onto main branch
git branch -d feature-branch           # Delete branch locally
git push origin --delete feature-branch # Delete branch on remote
git branch -m new-branch-name          # Rename branch
git push -u origin feature-branch      # Set upstream tracking branch
```

This guide covers the essentials of Git branching. For more details, refer to the [Git documentation](https://git-scm.com/doc).
