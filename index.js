const userInfo = require('./information')
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${userInfo.name} from the ${userInfo.campus} campus!`,
    e : "oO",
    T : "U "
}));