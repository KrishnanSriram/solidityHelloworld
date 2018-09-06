const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts = null;
let inbox = null;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  // console.log(accounts);
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['hi there']})
    .send({ from: accounts[0], gas: '1000000' });
});

describe("Inbox", () => {
  it('Deploys a contract', () => {
    // console.log(inbox);
    assert.ok(inbox.options.address);
  });
  it('has a default message', async() => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'hi there');
  });
  it('can change message', async() => {
    await inbox.methods.setMessage('bye').send({from: accounts[0]});
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  })
});
