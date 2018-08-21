import web3 from './web3';
import Message from './build/Message.json';

export default address => {
    return new web3.eth.Contract(JSON.parse(Message.interface), address);
};
