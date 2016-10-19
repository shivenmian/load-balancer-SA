# load-balancer-SA
An analysis of the efficiency of load balancing algorithms on MEAN stack webapps

# Getting Started

1. Fork this repository to your accounts. There's a button on the top to fork.
2. Clone your forked repository to your computers:

  ```git clone <forked-repo-url>```

  where ```<forked-repo-url>``` is the URL of your forked repository.

3. ```cd``` to the cloned folder

  ```cd <folder-location>``` 

  where ```<folder-location>``` is where your cloned folder is located.

4. Add the main repo URL as upstream.

  ```git remote add upstream https://github.com/shivenmian/load-balancer-SA```

  Upstream is used to sync your local folder with the main repo. So if I made changes to master on this repo, and you don't   have them on your own folder's master, you just simply do `git pull upstream master` on your own master. 

You're done. Start working.

# Workflow (follow this strictly)

We'll be submitting Pull Requests (PRs) for features. To do so:

1. ```cd``` to your local folder (i.e the one you cloned).
2. Checkout to another branch where you're gonna work. **Don't work on master. Always checkout to another branch for everything you work on**. 

  ```git checkout -b branchname```

  You can check your current branch by doing ```git branch```. The branch name with a star (\*) is your current branch.

3. Once you're on another branch, you can add in your code and work.

4. When you're done working, push your code.

  ```
  git add .
  git commit -m "commit message"
  git push origin master
  ```

5. Go to https://github.com/shivenmian/load-balancer-SA while logged into your account. If you have pushed correctly, you'll see a message "You recently pushed branches. Create Pull Request". Create the pull request.
