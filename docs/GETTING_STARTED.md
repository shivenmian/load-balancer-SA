# Getting Started

## Basic Repo Setup

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

## Node Setup

We'll be working on the MEAN stack, and will write the algos in ```node.js```. So you'll need to install node, npm and mongo to work. 

1. Install node.js and npm from [here](https://nodejs.org/en/).
2. Update npm:
	```npm install -g npm@latest```
3. Install mongoDB from [here](https://www.mongodb.com/download-center?jmp=nav#community)

## Project Setup

1. Go to the ```webapp``` directory in your own local folder (where the webapp code is located).

2. Install dependencies.

	```npm install```

3. Start up the application on a port (additional parameter, defaulted to 3000) 

	```node app.js <port-number>```

	i.e if you do ```node app.js 6050```, then check ```localhost:6050``` to see if the app runs, and if you do ```node app.js``` then check ```localhost:3000```.
