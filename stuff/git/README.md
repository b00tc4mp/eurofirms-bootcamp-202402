# git

## steps to create develop and feature branches

🐷 pwd
/Users/manuelbarzi/workspace/eurofirms-bootcamp-202402

🐷 git --version
git version 2.40.0

🐷 git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
Initialized empty Git repository in /Users/manuelbarzi/workspace/eurofirms-bootcamp-202402/.git/

🐷 ls -a
.               ..              .git            staff

🐷 git remote add origin https://github.com/manuelbarzi/eurofirms-bootcamp-202402

🐷 git fetch
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 893 bytes | 297.00 KiB/s, done.
From https://github.com/manuelbarzi/eurofirms-bootcamp-202402
 * [new branch]      develop    -> origin/develop
 * [new branch]      main       -> origin/main

 🐷 git checkout develop
Your branch is up to date with 'origin/develop'.

🐷 git add staff/manuel-barzi/.gitignore 

🐷 git status
On branch develop
Your branch is up to date with 'origin/develop'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   staff/manuel-barzi/.gitignore

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .DS_Store
        staff/.DS_Store
        staff/manuel-barzi/liveshare/
        staff/manuel-barzi/objects/
        staff/manuel-barzi/prework/
        stuff/

🐷 git commit -m "add git ignore file #71"
[develop bae277b] add git ignore file #71
 1 file changed, 1 insertion(+)
 create mode 100644 staff/manuel-barzi/.gitignore

🐷 git branch
* develop

🐷 git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (5/5), 389 bytes | 389.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/manuelbarzi/eurofirms-bootcamp-202402
   89ff8f9..bae277b  develop -> develop

🐷 git branch feature/prework

🐷 git branch
* develop
  feature/prework

🐷 git checkout feature/prework
Switched to branch 'feature/prework'

🐷 git add staff/manuel-barzi/prework 

🐷 git status
On branch feature/prework
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   staff/manuel-barzi/prework/hello-world/index.html
        new file:   staff/manuel-barzi/prework/playground/index.1.html
        new file:   staff/manuel-barzi/prework/playground/index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .DS_Store
        staff/.DS_Store
        staff/manuel-barzi/liveshare/
        staff/manuel-barzi/objects/
        stuff/

🐷 git commit -m "add prework files #1"
[feature/prework 45edd4e] add prework files #1
 3 files changed, 369 insertions(+)
 create mode 100644 staff/manuel-barzi/prework/hello-world/index.html
 create mode 100644 staff/manuel-barzi/prework/playground/index.1.html
 create mode 100644 staff/manuel-barzi/prework/playground/index.html

🐷 git push
fatal: The current branch feature/prework has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/prework

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

🐷 git push --set-upstream origin feature/prework
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), 2.42 KiB | 2.42 MiB/s, done.
Total 10 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
remote: 
remote: Create a pull request for 'feature/prework' on GitHub by visiting:
remote:      https://github.com/manuelbarzi/eurofirms-bootcamp-202402/pull/new/feature/prework
remote: 
To https://github.com/manuelbarzi/eurofirms-bootcamp-202402
 * [new branch]      feature/prework -> feature/prework
branch 'feature/prework' set up to track 'origin/feature/prework'.

🐷 git checkout develop
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.

🐷 git branch
* develop
  feature/prework

🐷 git branch feature/objects

🐷 git branch
* develop
  feature/objects
  feature/prework

🐷 git checkout feature/objects
Switched to branch 'feature/objects'

🐷 git branch
  develop
* feature/objects
  feature/prework

🐷 git add staff/manuel-barzi/objects 

🐷 git commit -m "add object files #42"
[feature/objects 83a1810] add object files #42
 16 files changed, 1286 insertions(+)
 create mode 100644 staff/manuel-barzi/objects/README.md
 create mode 100644 staff/manuel-barzi/objects/addElement.1.js
 create mode 100644 staff/manuel-barzi/objects/addElement.js
 create mode 100644 staff/manuel-barzi/objects/addElements.1.js
 create mode 100644 staff/manuel-barzi/objects/addElements.js
 create mode 100644 staff/manuel-barzi/objects/hello-world.js
 create mode 100644 staff/manuel-barzi/objects/insertElement.js
 create mode 100644 staff/manuel-barzi/objects/insertElements.1.js
 create mode 100644 staff/manuel-barzi/objects/insertElements.2.js
 create mode 100644 staff/manuel-barzi/objects/insertElements.3.js
 create mode 100644 staff/manuel-barzi/objects/insertElements.js
 create mode 100644 staff/manuel-barzi/objects/mergeElements.js
 create mode 100644 staff/manuel-barzi/objects/removeElement.js
 create mode 100644 staff/manuel-barzi/objects/removeElements.js
 create mode 100644 staff/manuel-barzi/objects/removeFirstElement.js
 create mode 100644 staff/manuel-barzi/objects/removeLastElement.js

🐷 git push
fatal: The current branch feature/objects has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/objects

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

🐷 git push --set-upstream origin feature/objects
Enumerating objects: 24, done.
Counting objects: 100% (24/24), done.
Delta compression using up to 8 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (21/21), 5.95 KiB | 5.95 MiB/s, done.
Total 21 (delta 7), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (7/7), done.
remote: 
remote: Create a pull request for 'feature/objects' on GitHub by visiting:
remote:      https://github.com/manuelbarzi/eurofirms-bootcamp-202402/pull/new/feature/objects
remote: 
To https://github.com/manuelbarzi/eurofirms-bootcamp-202402
 * [new branch]      feature/objects -> feature/objects
branch 'feature/objects' set up to track 'origin/feature/objects'.

🐷 git checkout develop
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.

🐷 git branch
* develop
  feature/objects
  feature/prework

🐷 git branch feature/liveshare

🐷 git branch
* develop
  feature/liveshare
  feature/objects
  feature/prework

🐷 git checkout feature/liveshare
Switched to branch 'feature/liveshare'

🐷 git branch
  develop
* feature/liveshare
  feature/objects
  feature/prework

🐷 git add staff/manuel-barzi/liveshare

🐷 git status
On branch feature/liveshare
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   staff/manuel-barzi/liveshare/README.md
        new file:   staff/manuel-barzi/liveshare/home.html
        new file:   staff/manuel-barzi/liveshare/login.html
        new file:   staff/manuel-barzi/liveshare/register.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .DS_Store
        staff/.DS_Store
        stuff/

🐷 git commit -m "add liveshare files #56"
[feature/liveshare e41db2c] add liveshare files #56
 4 files changed, 123 insertions(+)
 create mode 100644 staff/manuel-barzi/liveshare/README.md
 create mode 100644 staff/manuel-barzi/liveshare/home.html
 create mode 100644 staff/manuel-barzi/liveshare/login.html
 create mode 100644 staff/manuel-barzi/liveshare/register.html

🐷 git push
fatal: The current branch feature/liveshare has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/liveshare

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

🐷 git push --set-upstream origin feature/liveshare
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 1.55 KiB | 1.55 MiB/s, done.
Total 8 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'feature/liveshare' on GitHub by visiting:
remote:      https://github.com/manuelbarzi/eurofirms-bootcamp-202402/pull/new/feature/liveshare
remote: 
To https://github.com/manuelbarzi/eurofirms-bootcamp-202402
 * [new branch]      feature/liveshare -> feature/liveshare
branch 'feature/liveshare' set up to track 'origin/feature/liveshare'.