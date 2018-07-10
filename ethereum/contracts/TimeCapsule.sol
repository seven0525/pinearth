pragma solidity ^0.4.18;
import 'github.com/OpenZeppelin/openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract TimeCapsule is Ownable {

    struct Message {
        address writerAddress;
        string nickName;
        string message;
        string prefecture;
    }
    
    address public provider;
    uint amount;
    address receiver;
    address[] public writerAccounts;
    Message[] public messages;
    
    

    // function TimeCapsule() public {
    //     owner = msg.sender;
    // }

    event MessageInfo(
        address writerAddress,
        string nickName,
        string message,
        string prefecture
    );

    function postMessage(string _nickName, string _message, string _prefecture) public {

        messages.push(Message(msg.sender, _nickName, _message, _prefecture));
        writerAccounts.push(msg.sender);
        MessageInfo(msg.sender, _nickName, _message, _prefecture);
    }
    


    // function getWriterAccounts() view public returns (address[]) {
    //     return writerAccounts;
    // }

    // function getWriterAccount(uint256 _index) view public returns (address) {
    //     return writerAccounts[_index];
    // }

    // function getWriterCount() view public returns (uint) {
    //     return writerAccounts.length;
    // }

    function getMessage(uint256 _index) view public returns (address, string, string, string) {
        return (messages[_index].writerAddress, messages[_index].nickName, messages[_index].message, messages[_index].prefecture);
    }

    // function getMessageCount() view public returns (uint) {
    //     return messages.length;
    // }
    
    //関数実行者がproviderに100wei送金する（error）
    function deposit(address _provider) public payable {
        provider = _provider;
        provider.transfer(1);
    }
    
    // //関数実行者がproviderに指定金額送金する
    function transfer(address _provider) public payable {
        require(msg.sender.balance > msg.value);
        provider = _provider;
        amount = msg.value;
        provider.transfer(amount);
    }
    

}