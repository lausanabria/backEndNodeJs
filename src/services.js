const fs = require('fs');
const path = require('path');

exports.login = function(username, password) {
    
    const file = fs.readFileSync(path.join(__dirname, '../users.txt'), 'utf8');
    let users= JSON.parse(file);
    console.log(username,password);
    const expectedUser = users.find(user => user.username === username);
    if(expectedUser){
        const expectedPass = users.find(user => user.pass === password);
        if(expectedPass){
            //username and password are correct
            const out = '{"status":"200","message":"Bienvenido '+expectedUser.name+'"}';
            return JSON.parse(out);
        }
        else{
            //username is correct but the password is incorrect
            const out = '{"status":"403","message":"Credenciales incorrectas"}';
            return JSON.parse(out);
        }
    }
    //username and password are incorrect
    const out = '{"status":"404","message":"Credenciales no encontradas"}';
    return JSON.parse(out);
};



