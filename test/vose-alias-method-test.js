var assert = require('assert'),
	VoseAliasMethod = require('../vose-alias-method').VoseAliasMethod;

describe('VoseAliasMethod', function() {
	
	describe("#Bad Inputs", function() {
		it('No Input', function() {
			assert.throws(function() { new VoseAliasMethod() }, Error);
		});			

		//it('Empty Input', function() {
		//	assert.throws(function() { new VoseAliasMethod([]) }, Error);
		//});

		//it('Non Numeric Input', function() {
		//	assert.throws(function() { new VoseAliasMethod(["a","monkey"]) }, Error);
		//});
	});
	
	describe("#Bad Inputs", function() {
	
		// Compare two numeric arrays to the second decimal place
		var numericArrayCompare = function(ar1,ar2) {
			var a1 = ar1.map(function(element){return Math.round(element*100)/100;});
			var a2 = ar2.map(function(element){return Math.round(element*100)/100;});
			
			var i = a1.length;
			if (i != a2.length) return false;
			while (i--) {
					if (a1[i] !== a2[i]) return false;
			}
			return true;
		}
		
		var test = function(probabilities, maxPicks) {
			var i;
			var wins = [], winsPercent = [], aliasMethod;
			var probabilityLength = probabilities.length;
			
			if( maxPicks == null ) {
				maxPicks = 100000;
			}
			
			for (i = 0; i < probabilityLength; i++) {
				wins[i] = 0;
			}
			
			aliasMethod = new VoseAliasMethod(probabilities);
			for (i = 0; i < maxPicks; i++) {
				wins[aliasMethod.next()]++;
			}
			
			return wins.map(function(val){return val/maxPicks});
		}	
	
		it('[.5,.5]', function() {
			var wins = test([.5,.5]);
			assert(numericArrayCompare(wins,[.5,.5]));
		});
		
		it('[5,5]', function() {
			var wins = test([5,5]);
			assert(numericArrayCompare(wins,[.5,.5]));
		});		
		
		it('[.1,.2,.3,.4]', function() {
			var wins = test([.1,.2,.3,.4]);
			assert(numericArrayCompare(wins,[.1,.2,.3,.4]));
		});
		
		it('[.1,.2,.3]', function() {
			var wins = test([.1,.2,.3,.4]);
			assert(numericArrayCompare(wins,[.1,.2,.3,.4]));
		});		
		
		it('[10,20,30,40];', function() {
			var wins = test([10,20,30,40]);
			assert(numericArrayCompare(wins,[.1,.2,.3,.4]));
		});			
			
	});	
});