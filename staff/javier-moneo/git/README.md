# Git commands

Typical commands in Git.

### SETUP
Configuring user information used across all local repositories

```
git config --global user.name “[firstname lastname]”
```
Set a name that is identifiable for credit when review version history.

---

```
git config --global user.email “[valid-email]”
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