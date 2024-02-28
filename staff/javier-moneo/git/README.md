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

### BRANCH & MERGE

Isolating work in branches, changing context, and integrating changes.
