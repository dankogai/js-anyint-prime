import * as _Module from '../prime.js';
describe('import', () => {
  for (const k in _Module) {
    const tn = k === 'version' ? 'string'
      : k === 'A014233' ? 'object'
        : k === 'millerRabinTests' ? 'object'
          : 'function';
    it(`${k} is a ${tn}`, () => chai.expect(typeof _Module[k]).to.equal(tn));
  }
});
