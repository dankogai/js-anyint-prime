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
isPrime(0x7fffffff);    // true;
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
import {
  nextPrime, previousPrime,
  nextPseudoPrime, previousPseudoPrime
} from './prime.js';

nextPrime(-1);                              // 2
nextPrime(0xffffffff);                      // 4294967311 == 0x10000000f
nextPrime(BigInt(Number.MAX_SAFE_INTEGER)); // 9007199254740997n
nextPrime(1n << 64n);                       // undefined
nextPrime(1n << 64n, true);                 // 18446744073709551629n == 0x1000000000000000dn
nextPseudoPrime(1n << 64n);                 // 18446744073709551629n

previousPrime(2);                           // undefined
previousPrime(Number.MAX_SAFE_INTEGER);     // 9007199254740881
previousPrime(1n << 64n);                   // 18446744073709551557n == 0xffffffffffffffc5n
previousPrime(1n << 128n);                  // undefined
previousPrime(1n << 128n, true);            // 340282366920938463463374607431768211297n
previousPseudoPrime(1n << 128n);            // 340282366920938463463374607431768211297n
```

```javascript
import { primes, primesBetween, pseudoPrimesBetween } from './prime.js';

[...primes(25)]; /* [
   2,  3,  5,  7, 11, 13, 17, 19,
  23, 29, 31, 37, 41, 43, 47, 53,
  59, 61, 67, 71, 73, 79, 83, 89,
  97
] */

let maxint = maxint = Number.MAX_SAFE_INTEGER;
[...$P.primesBetween(maxint-1000,maxint)]; /* [
  9007199254740041, 9007199254740103,
  9007199254740121, 9007199254740251,
  9007199254740259, 9007199254740299,
  9007199254740307, 9007199254740311,
  9007199254740397, 9007199254740439,
  9007199254740481, 9007199254740509,
  9007199254740529, 9007199254740541,
  9007199254740563, 9007199254740571,
  9007199254740613, 9007199254740623,
  9007199254740649, 9007199254740653,
  9007199254740677, 9007199254740727,
  9007199254740761, 9007199254740847,
  9007199254740881
] */

 [...$P.pseudoPrimesBetween((1n<<128n)-1000n, (1n<<128n))]; /* [
  340282366920938463463374607431768210659n,
  340282366920938463463374607431768210743n,
  340282366920938463463374607431768210781n,
  340282366920938463463374607431768211099n,
  340282366920938463463374607431768211181n,
  340282366920938463463374607431768211219n,
  340282366920938463463374607431768211223n,
  340282366920938463463374607431768211283n,
  340282366920938463463374607431768211297n
] */
```
