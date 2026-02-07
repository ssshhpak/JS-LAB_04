const MyApp = require('./namespace');

MyApp.Utils = (function() {
    function calculateDiscount(price, rate) {
        return price - price * rate;
    }

    return {
        calculateDiscount
    };
})();

module.exports = MyApp.Utils;