"use strict";
// This is an example of a function that will return of a casted type.
// Example is borrowed from what like an Angular HttpClient might do underwater type-wise.
exports.__esModule = true;
function getHttp(url, exampleData) {
    return exampleData;
}
exports.getHttp = getHttp;
var data = {
    bliep: 'bloep',
    herp: 'derp'
};
var Another = /** @class */ (function () {
    function Another(obj) {
        this.bliep = obj.bliep;
        this.herp = obj.herp;
    }
    return Another;
}());
exports.Another = Another;
var test1 = getHttp('', data);
var test2 = getHttp('', data);
var test3 = new Another(data);
// Autocompletion from the type system works for all three. 
// Only test3 has the actual `typeof` respond with `Object Another {}`, 
// which is an upside to the other 2 options.
// test1.bliep
// test2.bliep
// test3.bliep
console.log(typeof test1, test1); // object { bliep: 'bloep', herp: 'derp' }
console.log(typeof test2, test2); // object { bliep: 'bloep', herp: 'derp' }
console.log(typeof test3, test3); // object Another { bliep: 'bloep', herp: 'derp' }
