import assert from 'assert';
import tddTest from '../lib';

describe('tdd-test', function () {
  it('first test', function () {
    assert(false, false);
  });
  it('2nd test', function () {
    assert(true, 1===1);
  });
});
