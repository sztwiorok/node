import assert from 'assert';
import tddTest from '../lib';

describe('tdd-test', function () {
  it('should have unit test!', function () {
    assert(false, 1==2);
  });
  it('failed', function () {
    assert(true, 1==1);
  });
});
