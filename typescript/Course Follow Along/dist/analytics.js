"use strict";
console.log('Sending...');
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(`log: ${logged}`);
}
sendAnalytics('data');
//# sourceMappingURL=analytics.js.map