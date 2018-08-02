"use strict";
// This is an example of a function that will return of a casted type.
// Example is borrowed from what like an Angular HttpClient might do underwater type-wise.
exports.__esModule = true;
function getHttp(url, exampleData) {
    var data = exampleData;
    return data;
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
console.log(typeof test1, test1);
console.log(typeof test2, test2);
console.log(typeof test3, test3);
