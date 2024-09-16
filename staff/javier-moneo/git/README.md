# Git commands

Typical commands in Git.

### SETUP
Configuring user information used across all local repositories

```
git config --global user.name "[firstname lastname]"
```
Set a name that is identifiable for credit when review version history.

---

```
git config --global user.email "[valid-email]"
```
Set an email address that will be associated with each history marker.

---

```
git config --global color.ui auto
```
Set automatic command line coloring for Git for easy reviewing.

---

### SETUP & INIT
Configuring user information, initializing and cloning repositories

```
git init
```
Initialize an existing directory as a Git repository

---

```
git clone [url]
```
Retrieve an entire repository from a hosted location via URL

---

### STAGE & SNAPSHOT

```
git status
```
Show modified files in working directory, staged for your next commit

---

```
git add [file]
```
Add a file as it looks now to your next commit (stage)

---

```
git reset [file]
```
Unstage a file while retaining the changes in working directory

---

```
git diff
```
Diff of what is changed but not staged

---

```
git diff --staged
```
Diff of what is staged but not yet commited

---

```
git commit -m "[descriptive message]"
```
Commit your staged content as a new commit snapshot

---

```
git commit -m "[descriptive message #issueNumber]"
```
Commit your staged content as a new commit snapshot pointing the issueNumber on GitHub. Example #746

---

```
git commit –amend -m "message corrected"
```
Correct commit message

---

### BRANCH & MERGE

Isolating work in branches, changing context, and integrating changes.

```
git branch
```
List your branches. a * will appear next to the currently active branch

---

```
git branch [branch-name]
```
Create a new branch at the current commit

---

```
git checkout
```
Switch to another branch and check it out into your working directory

---

```
git log
```
Show all commits in the current branch’s history

---

### INSPECT & COMPARE
Examining logs, diffs and object information

```
git log
```
Show the commit history for the currently active branch

---

```
git log branchB..branchA
```
Show the commits on branchA that are not on branchB

---

```
git log --follow [file]
```
Show the commits that changed file, even across renames

---

```
git diff branchB...branchA
```
Show the diff of what is in branchA that is not in branchB

---

```
git show [SHA]
```
Show any object in Git in human-readable format

---

### TRACKING PATH CHANGES
Versioning file removes and path changes

```
git rm [file]
```
Delete the file from project and stage the removal for commit

---

```
git mv [existing-path] [new-path]
```
Change an existing file path and stage the move

---

```
git log --stat -M
```
Show all commit logs with indication of any paths that moved

---

### IGNORING PATTERNS
Preventing unintentional staging or commiting of files

```
logs/
*.notes
pattern*/
```
Save a file with desired paterns as .gitignore with either direct string
matches or wildcard globs.

---

### SHARE & UPDATE
Retrieving updates from another repository and updating local repos

```
git remote add [alias] [url]
```
Add a git URL as an alias

---

```
git fetch [alias]
```
Fetch down all the branches from that Git remote

---

```
git push [alias] [branch]
```
Transmit local branch commits to the remote repository branch

---

```
git push -f
```
Is short for git push --force. It forces a push when otherwise git would reject your git push because you changed your repo history in your pushing repository. Forced pushes also let you overwrite someone else's commits which have been pushed after your last pull.
[Difference between git push and git push -f](https://stackoverflow.com/questions/44678942/difference-between-git-push-and-git-push-f)

---

```
git pull
```
Fetch and merge any commits from the tracking remote branch

---