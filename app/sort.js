// Requires
var fs = require('fs');
var chalk = require('chalk');

// Read skyscraper.json
fs.readFile('../io/skyscraper.json', function (err, data) {
  if (err) throw err;

  else {
  	// Parse json
  	var contents = JSON.parse(data);

  	// Sort ascending by height
  	contents.wolkenkratzer.sort(function(a, b) {
  		return a.hoehe - b.hoehe;
  	});

  	// Write sorted list to file, then log the objects
  	fs.writeFile('../io/skyscraper_asc.json', JSON.stringify(contents), function(err) {
  		if (err) throw err;
  		console.log("Saverino!");

  		// Print needed logs for every skyscraper object
  		contents.wolkenkratzer.forEach(function (curr) {
  			console.log("Name: " + chalk.blue('%s'), curr.name);
  			console.log("Stadt: " + chalk.green('%s'), curr.stadt);
  			console.log("Hoehe: " + chalk.red('%s'), curr.hoehe);
  			console.log("~~~~~~~~~~~~~~~~~~~~");
  		});
  	})

 
  	
  }
  
});