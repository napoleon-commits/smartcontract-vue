<template>
  <div>
      <h1>First Smart Contract</h1>
      <h2 id="instructor"></h2>
      <label for="name">Instructor Name: </label>
      <input type="text" id="name">
      <br>
      <label for="age">Instructor Age: </label>
      <input type="text" id="age">
      <br>
      <button>Update Instructor</button>
  </div>
</template>

<script>

var Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.defaultAccount = "0xe85B414aB92e26392792A78bBF37f00c1117f329";

const contract = new web3.eth.Contract([
	{
		"constant": true,
		"inputs": [],
		"name": "getCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
], "0xBF310De7e56ec8D5BAA0F69bac963B958a733821");

console.log(contract.methods);

contract.methods.getCount().call(function(err, data){
  if(!err){
    console.log("data");
    console.log(data);
    console.log("data");
  } else{
    console.log("err");
    console.log(err);
    console.log("err");
  }
});

web3.eth.getBalance("0xA4C963C4b7171F11aE947183890128c68C04d621").then(function(balance){
  console.log(`Balance of ${"0xA4C963C4b7171F11aE947183890128c68C04d621"}: ${balance}`);
})

export default {

}
</script>

<style>

</style>