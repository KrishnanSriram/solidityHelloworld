const path = require('path');
const fs = require('fs');
const solc = require('solc');

const helloworldPath = path.resolve(__dirname, 'contracts', 'helloworld.sol');
const source = fs.readFileSync(helloworldPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Helloworld'];
