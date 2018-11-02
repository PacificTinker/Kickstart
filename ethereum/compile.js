const path = require('path');
const fs = require('fs-extra'); // file system has extra functions
const solc = require('solc');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath); //deletes folder and contents

const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');
const output = solc.compile(source,1).contracts;

fs.ensureDir(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.win32.resolve(buildPath, contract.substr(1) + '.json'),
    output[contract]
  );
}
