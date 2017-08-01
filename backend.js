'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
app.listen(3000, function () {
    console.log('listening on 3000');
});

app.use(bodyParser.json({type: '*/*'}));
app.use(cors());
app.set('json replacer', function (key, value) {
    if (this[key] instanceof Date) {
        // Your own custom date serialization
        value = 'Moj format ' + this[key].toISOString();
    }

    return value;
});
process.on('message', function (packet) {
    if (packet.topic == 'cmd:topic') {
        console.log('Received packet', packet.data);
    }
});
//async function mirek() {
//    return Promise.resolve("a")
//}
app.use(function (req, res, next) {
    res.header('Cache-Control', 'no-cache');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    next();
});
class User {
    constructor(id, name, surname, age, sex) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sex = sex;
    }
}
let users = [new User(1, 'Jacek', 'Doe', '43', 'Mężczyzna'),
    new User(2, 'Marzanna', 'Uss', '54', 'Kobieta'),
    new User(3, 'Julia', 'Dolej', '22', 'Kobieta')];

function generateID() {
    let maxID = 0;
    users.map((obj) => {
        if (obj.id > maxID) {
            maxID = obj.id;
        }
    });
    return (maxID + 1);
}
app.get('/users', function (request, response) {
    response.send(users);
});

app.get('/users/:id', function (request, response) {
    let found = users.findIndex(user => user.id == request.params.id);
    response.send(users[found]);
});

app.post('/users', function (request, response) {
    let user = request.body;
    user.id = generateID();
    users.push(user);
    response.send({id: user.id});
});

app.put('/users', function (request, response) {
    let editedUser = request.body;
    if (editedUser.birthDate) {
        editedUser.birthDate = new Date(editedUser.birthDate);

    }
    let found = users.find(user => user.id == editedUser.id);
    if (found) {
        Object.assign(found, editedUser);
    }
    response.end();
});

app.delete('/users/:id', function (request, response) {
    let found = users.findIndex(user => user.id == request.params.id);
    users.splice(found, 1);
    response.end();
});
var i = 0;
app.get('/stuck', function handleStuckRequest(request, response) {
    ImStuck();
    process.send({
        topic: 'cmd:topic',
        data: {
            some: 'data'
        }
    });
    response.send({res: 'ok'});
});

app.get('/leak', function handleStuckRequest(request, response) {

    memeoryLeak();
    response.send({res: 'ok'});
});
var li = [];
function memeoryLeak() {
    i++;
    li = [];
    if (i == 3) {
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream('/home/jenkins.tar')
        });

        lineReader.on('line', function (line) {
            li.push(line)
        });
    }
}


function ImStuck() {
    i++;
    if (i == 3) {
        while (true) {

        }
    }
}

function run_cmd(cmd, args, callBack) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) {
        resp += buffer.toString()
    });
    child.stdout.on('end', function () {
        callBack(resp)
    });
}
