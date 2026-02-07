const Core = require('./module1');

Core.loginUser("Admin");
const finalPrice = Core.processOrder(100);

console.log("Final price:", finalPrice);