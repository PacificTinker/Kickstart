import Web3 from 'web3';

//const web3 = new Web3(window.web3.currentProvider);
let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //not in browser or not running metamask use infura provider
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/fxqTAbG1MoesDObYQgC5' //this key will be visible
  );
  web3 = new Web3(provider);
}

export default web3;
