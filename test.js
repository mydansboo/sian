const assert = require('assert');
const multi= require('./index');

const val1 = multi(3,3,3);
console.log(val1);
assert.equal(val1,12);

const val2 = multi(2,3,3);
console.log(val2);
assert.equal(val2,11);
