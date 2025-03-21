const os = require('os');

const user = os.userInfo();
console.log(user);

uptime = os.uptime();
console.log(`this laptop has been running for about ${uptime}seconds`);

const myLaptop = {
    name: os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freememon: os.freemem(),
    architecture: os.arch(),
    hostname: os.hostname(),
    type: os.type(),
}
console.log(myLaptop);