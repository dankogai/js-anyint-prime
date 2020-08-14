/**
 *
 */
declare type anyint = number | bigint;
/**
 *
 */
export declare const mulmod: (a: anyint, b: anyint, m: anyint) => any;
/**
 * @param b base
 * @param e exponent
 * @param m modulus
 * @returns `(b ** e) mod m`
 */
export declare function powmod(b: anyint, e: anyint, m: anyint): anyint;
/**
 * @link https://en.wikipedia.org/wiki/Miller–Rabin_primality_test
 * @param a
 */
export declare function millerRabinTest(a: number): (n: anyint) => boolean;
/**
 * @link https://oeis.org/A014233
 */
export declare const A014233: Map<number, number>;
export declare const millerRabinTests: Map<any, any>;
/**
 *
 */
export declare function isMersennePrime(n: anyint): boolean;
/**
 * @param n
 */
export declare function isProbablyPrime(n: anyint): (number | boolean)[];
/**
 * @param n
 */
export declare function isPrime(n: anyint): number | boolean;
/**
 * @param n
 */
export declare function nextPrime(n: anyint): anyint;
/**
 * @param n
 */
export declare function previousPrime(n: anyint): anyint;
/**
 * generates `n` primes.
 * If `n` is `BigInt`, generated primes are also `BigInt`.
 * If `n` is omitted, it returns an infinite iterator.
 */
export declare function primes(n?: number): Generator<any, void, unknown>;
/**
 * generates primes where `begin <= p < end`
 */
export declare function primesBetween(begin?: anyint, end?: anyint): any;
export {};
