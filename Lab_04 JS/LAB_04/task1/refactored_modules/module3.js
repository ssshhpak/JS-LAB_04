const MyApp = require('./namespace');

MyApp.Config = (function() {
    const ADMIN_NAME = 'Admin';
    const DISCOUNT_RATE = 0.1;

    return {
        ADMIN_NAME,
        DISCOUNT_RATE,
    };

})();

module.exports = MyApp.Config;