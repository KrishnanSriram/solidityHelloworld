const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider('envelope recipe disorder slot buffalo swamp prison eyebrow annual until shoe alter',
  'https://rinkeby.infura.io/v3/7bc194a0331c40e18b0d65c8a5e7d9c8');
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`Accounting to deploy from account ${accounts[0]}`);
  try {
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data: bytecode, arguments: ['hi there']})
      .send({ from: accounts[0], gas: '1000000' });
    console.log(`Contract deployed to ${result.options.address}`);
  } catch(ex) {
    console.log('Transaction failed with error', ex);
  }
};

deploy();
