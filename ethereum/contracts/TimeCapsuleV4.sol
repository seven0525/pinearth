pragma solidity ^0.4.18;

contract MessageFactory {

    struct Request {
        string location;
        address messageaddress;
    }
    Request [] public requests;
    address [] public awsrequests;
    address public messageContractAddress;

    function createMessage(string _location) public returns(address){
        address newMessage = new Message(_location, msg.sender);
        // return newMessage;
        messageContractAddress = newMessage;
    }

    function getMessageAddress() public view returns(address) {
        return messageContractAddress;
    }



    function storeMessage(string _location, address newMessage) public {
        Request memory newRequest = Request({
            messageaddress: newMessage,
            location: _location
            });
        requests.push(newRequest);
    }

    function searchMessages(string _location) public view returns(address[]) {
        awsrequests.length = 0;
        for (uint i = 0; i < requests.length; i++) {
            if (keccak256(requests[i].location) == keccak256(_location))
                awsrequests.push(requests[i].messageaddress);
        }
        return awsrequests;
    }
}


contract Message {

    string location;
    address writer;
    string text;
    string nickName;
    string ipfsUrl;
    uint fee = 100;

    function Message(string _location, address _writer) public {
        location = _location;
        writer = _writer;
    }

    modifier restricted() {
        require(msg.sender == writer);
        _;
    }

    function postMessage(string _text, string _nickName, string _ipfsUrl) public restricted {
        text = _text;
        nickName = _nickName;
        ipfsUrl = _ipfsUrl;
    }

    function getMessage() public view returns(address, string, string, string, string, uint) {
        return (writer, nickName, location, text, ipfsUrl, this.balance);
    }

    function donate() public payable{
        require(fee == msg.value);
    }

    function withdraw() public restricted {
        writer.transfer(this.balance);
    }
}