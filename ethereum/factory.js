import web3 from './web3';

const address = "0x57c6faee958934e7bfe0f5676156cdaa31eb21dc";

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_location",
				"type": "string"
			}
		],
		"name": "createMessage",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_location",
				"type": "string"
			}
		],
		"name": "searchMessages",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requests",
		"outputs": [
			{
				"name": "location",
				"type": "string"
			},
			{
				"name": "messageaddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_location",
				"type": "string"
			},
			{
				"name": "newMessage",
				"type": "address"
			}
		],
		"name": "storeMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "awsrequests",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi, address);