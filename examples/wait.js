/**
 * Created by alex on 21.11.16.
 */
var ndef = require('ndef'),      			
    nfc = require('..'); 

status = nfc.waitForNFCTag();
console.log(status);
