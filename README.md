[![ES2015](https://img.shields.io/badge/JavaScript-ES2015-blue.svg)](http://www.ecma-international.org/ecma-262/6.0/)
[![MIT LiCENSE](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![build status](https://secure.travis-ci.org/dankogai/js-anyint-prime.png)](http://travis-ci.org/dankogai/js-anyint-prime)


# js-anyint-prime

Prime number utility for JavaScript that works with BigInt as well as Number

## Synopsis

```javascript
import { isPrime, isProbablyPrime } from './prime.js';
isPrime(53);    // true
isPrime(57);    // false
isPrime(07fffffff); // true;
isPrime(Number.MAX_SAFE_INTEGER);               // false
isPrime(Number.MAX_SAFE_INTEGER + 1);           // exception
isPrime(BigInt(Number.MAX_SAFE_INTEGER) + 1n);  // false
isPrime((1n << 53) - 1n)    // M53; false
isPrime((1n << 89) - 1n)    // M89; true
```
