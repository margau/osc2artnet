#!/usr/bin/env node
var prefix= "o2a"; 
// OSC: /o2a/(universe)/(channel) value
/*
Universe in decimal!
Subnet: first 4 bits
Universe: last 4 bits

Example: Subnet 1 (0x1) DMX-Universe 0 (0x0) = 0x10 = 0d16 = Dezimal 16
*/
//Set up Artnet
var art_options = {
	
}
 
var artnet = require('artnet')(art_options);
 
// Create an osc.js UDP Port listening
var osc = require("osc");
var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    metadata: true
});

// Open the socket.
udpPort.open();

// When the port is read, send an OSC message to, say, SuperCollider
udpPort.on("message", function (oscMsg) {
    //Split String
	var uri_parts=oscMsg.address.split('/');
	//Check for Prefix
	if ((typeof uri_parts[1] !== 'undefined')&&(uri_parts[1]==prefix)) {
		//Check for valid Universe
		if ((typeof uri_parts[2] !== 'undefined')&&(parseInt(uri_parts[2])>=0 && parseInt(uri_parts[2])<256)) {
			var universe=parseInt(uri_parts[2]);
			//Check for valid Channel
			if ((typeof uri_parts[3] !== 'undefined')&&(parseInt(uri_parts[3])>=0 && parseInt(uri_parts[3])<512)) {
				var channel=parseInt(uri_parts[3]);
				//Check for valid Value
				if ((typeof oscMsg.args[0].value !== 'undefined')&&(!isNaN(oscMsg.args[0].value))) {
					var value=parseInt(oscMsg.args[0].value);
					if(value>=0&&value<256) {
						console.log("SendArtnet: U"+universe+" Ch."+channel+" Val."+value);
						//Send ArtNet
						artnet.set(universe, channel,  value, function (err, res) {
						
						});
					}
				}
			}
		}
	}
});
