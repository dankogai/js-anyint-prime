[![ES2015](https://img.shields.io/badge/JavaScript-ES2015-blue.svg)](http://www.ecma-international.org/ecma-262/6.0/)
[![MIT LiCENSE](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![build status](https://secure.travis-ci.org/dankogai/js-anyint-prime.png)](http://travis-ci.org/dankogai/js-anyint-prime)


# js-anyint-prime

Prime number utility for JavaScript that works with BigInt as well as Number

## Synopsis

```javascript
import { isPrime, isProbablyPrime, primarityTest } from './prime.js';

isPrime(53);  // true
isPrime(57);  // false
isPrime(07fffffff); // true;
isPrime(Number.MAX_SAFE_INTEGER);               // false
isPrime(Number.MAX_SAFE_INTEGER + 1);           // exception
isPrime(BigInt(Number.MAX_SAFE_INTEGER) + 1n);  // false
isPrime((1n << 53) - 1n); // M53; false
isPrime((1n << 89) - 1n;  // M89; true

        isPrime(18446744073709551629n); // exception
isProbablyPrime(18446744073709551629n); // true;
  primarityTest(18446744073709551629n); // [ true, false ]
```

```javascript
import { nextPrime, previousPrime } from './prime.js';

nextPrime(-1);                              // 2
nextPrime(0xffffffff);                      // 4294967311 == 0x10000000f
nextPrime(BigInt(Number.MAX_SAFE_INTEGER)); // 9007199254740997n
nextPrime(1n << 64n);                       // undefined
nextPrime(1n << 64n, true);                 // 18446744073709551629n == 0x1000000000000000dn

previousPrime(2);                           // undefined
previousPrime(Number.MAX_SAFE_INTEGER);     // 9007199254740881
previousPrime(1n << 64n);                   // 18446744073709551557n == 0xffffffffffffffc5n
previousPrime(1n << 128n);                  // undefined
previousPrime(1n << 128n, true)             // 340282366920938463463374607431768211297n
```
