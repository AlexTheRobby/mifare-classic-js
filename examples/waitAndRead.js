/**
 * Created by alex on 22.11.16.
 */
var ndef = require('ndef'),      			
    nfc = require('..'); 

status = nfc.waitForNFCTag();
console.log(status);


nfc.read(function(err, buffer) {
    if (err) {
        console.log("Read failed ");
        console.log(err);
    } else {
        var bytes = buffer.toJSON();

        // Node 0.12.x
        if (bytes.hasOwnProperty('data')) {
            bytes = bytes.data;
        }

        var message = ndef.decodeMessage(bytes);

        console.log("Found NDEF message with " + message.length +
            (message.length === 1 ? " record" : " records" ));
        console.log(ndef.stringify(message));
    }
})
