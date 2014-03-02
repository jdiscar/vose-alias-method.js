VoseAliasMethod.js
====

Original Algorithm: Keith Schwarz (htiek@cs.stanford.edu)
Ported to Javascript by: JDiscar (j.discar+github@gmail.com)

TL;DR
-----------------------------------------
Simulates rolling an n-sided loaded dice.

Full Description
-----------------------------------------
  An implementation of the alias method implemented using Vose's algorithm.
  The alias method allows for efficient sampling of random values from a
  discrete probability distribution in O(1) time each, after a one-time 
  O(n) preprocessing time.
  
  For a complete writeup on the alias method, including the intuition and
  important proofs, please see the article "Darts, Dice, and Coins- Sampling
  from a Discrete Distribution" at: http://www.keithschwarz.com/darts-dice-coins/
  
	Supports Node.js, CommonJS, AMD, or Global use.	
	
  I realize that this project is overkill for what could have been provided in a 
	simple gist, but I was using this project to experiment with javascript package
	management/builds.
	
Sample Use
-----------------------------------------
  var generator = new VoseAliasMethod([.1, .2, .3, .4]);
  var chosenIndex1 = generator.next();
  var chosenIndex2 = generator.next();
	
Using NPM 
-----------------------------------------

* Install the [current stable version of Node.JS](http://nodejs.org/download/)
* Run _npm install_ within the project directory.
* Run _npm install mocha -g_ within the project directory to install mocha for testing.
* Run _npm install uglify-js -g_ within the project directory to install uglifyjs for minimizing.
* Run _npm install jsl -g_ within the project directory to install jsl.
* Run _npm install jshint -g_ within the project directory to install jshint.
* Run _npm install jscs -g_ within the project directory to install jscs.
* Run _npm run-script build_ to create vose-alias-method-min.js.
* Run _npm test_ to run the mocha tests in the test directory.
* All tests should pass, if they don't:
  * try to fix any obvious dependency issues, do you have __make__ installed?
  * is the problem my fault, create an issue on this project.
