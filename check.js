'use strict';

const http = require('http');

http.get('http://127.0.0.1:3000/users', function (res) {
    console.log("statusCode: ", res.statusCode); // <======= Here's the status code
    console.log("headers: ", res.headers);

    res.on('data', function (d) {
    });

}).on('error', function (e) {
}).setTimeout(1000, (a, b) => restart());


function restart() {
    var pm2 = require('pm2');
    pm2.connect(function (err) {

        // Start a script on the current folder
        pm2.restart({name: 'backend'}, function (err, proc) {
            if (err) throw new Error('err');


            // Disconnect to PM2
            pm2.disconnect(function () {
                process.exit(0)
            });
        });
    });
}
