import React from 'react';
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

function hash(props){
    return <p> {props.plaintext} hashed is {bcrypt.hash(myPlaintextPassword, saltRounds)} </p>;
};


const Hash = () => (
    <div>
        <hash plaintext = {myPlaintextPassword}/>
        <script src="hashTest.js"></script> 
    </div>
);

export default Hash;