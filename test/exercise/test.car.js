const assert = require('assert');
const Car = require('./car');

let car;
beforeEach(() => {
  car = new Car();
});
describe('Car', () => {
  it('can park', () => {
      assert.equal(car.park(), 'stopped');
  });
  it('can drive', () => {
    assert.equal(car.drive(), 'vrooom');
  });
})
