const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const path = require('path');
const fs = require('fs');
const compiledFactory = require('./build/CampaignFactory.json');

//const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  '', //removed 12 work key for security reasons
  'https://rinkeby.infura.io/' //removed infura key for security reasons
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x'+compiledFactory.bytecode })
    .send({ from: accounts[0] });

  console.log('Contract deployed to ', result.options.address);
};
deploy();
// Contract deployed to  0x75F5e93CA3961247Cc18e20A1de46463F58442a2
