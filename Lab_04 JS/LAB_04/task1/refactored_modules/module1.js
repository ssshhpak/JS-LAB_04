const MyApp = require('./namespace');
const Config = require('./module3');
const Utils = require('./module2');

MyApp.Modules.Core = (function() {
    let isLoggedIn = false;

    function loginUser(name) {
    if (name === Config.ADMIN_NAME) {
        isLoggedIn = true;
    }

    function logoutUser() {
        isLoggedIn = false;
    }

    function processOrder(price) {
        if (isLoggedIn) return null;
        return Utils.calculateDiscount(price, Config.DISCOUNT_RATE);
    }
    return {
        loginUser,
        logoutUser,
        processOrder,
    };
    }})();

module.exports = MyApp.Modules.Core;
