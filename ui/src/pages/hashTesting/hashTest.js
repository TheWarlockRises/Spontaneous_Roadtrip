const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

function hash(){
    let h = bcrypt.hash(myPlaintextPassword, saltRounds);
    document.getElementById("hashText").innerHTML = h;
        // Store hash in your password DB.
};

