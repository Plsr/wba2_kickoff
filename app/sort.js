// Requires
var fs = require('fs');

// Read skyscraper.json
fs.readFile('../io/skyscraper.json', function (err, data) {
  if (err) throw err;

  else {
  	// Parse json
  	var contents = JSON.parse(data);

  	// Print needed logs for every skyscraper object
  	contents.wolkenkratzer.forEach(function (curr) {
  		console.log("Name: " + curr.name);
  		console.log("Stadt: " + curr.stadt);
  		console.log("Hoehe: " + curr.hoehe);
  		console.log("~~~~~~~~~~~~~~~~~~~~");
  	})
  	
  }
  
});