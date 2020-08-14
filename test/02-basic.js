import * as _ from '../prime.js';
const $ = chai.expect;
const _BI = typeof BigInt == 'function' ? BigInt : Number;

describe('A014233', () => {
    let vs = new Set()
    for (const [k, v] of _.A014233) {
        // if (k === 41) break;
        if (vs.has(v)) continue;
        vs.add(v);
        if (typeof v === 'bigint' || v <= Number.MAX_SAFE_INTEGER) {
            it(`A014233[${k}] = ${v} is not prime`, () => $(_.isPrime(v)).to.equal(false));
        } else {
            it.skip(`SKIP A014233[${k}] = ${v} is not prime : BigInt needed`, x => x);
        }
    }
});
describe('Mersenne Primes', () => {
    const ps = _.primesBetween(0, 128);
    const mp = new Set([2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127]);
    for (const p of ps) {
        const m = typeof BigInt === 'function' ? (_BI(1) << _BI(p)) - _BI(1) : Math.pow(2, p) - 1;
        // console.log(m);
        if (typeof m === 'bigint' || p <= 53) {
            it(`M${p} is ${mp.has(p) ? '' : 'not '}prime`, () => $(_.isPrime(m)).to.equal(mp.has(p)));
        } else {
            it.skip(`SKIP M${p} check; BigInt needed`, x => x);
        }
    }
});
describe('primes(), primesBetween()', () => {
    it(`[...primesBetween(0, 1024)] === [...primes(172)]`, () =>
        $([..._.primesBetween(0, 1024)]).to.deep.equal([..._.primes(172)]))
    const maxi = Number.MAX_SAFE_INTEGER;
    if (typeof BigInt == 'function') {
        it(`[...primesBetween(${maxi - 1024}, ${maxi})].length == 26`, () => 
            $([..._.primesBetween(maxi - 1024, maxi)].length).to.equal(26));
    } else {
        it.skip(`SKIP primesBetween(${maxi - 1024}, ${maxi});  BigInt needed`, x => x);
    }
})