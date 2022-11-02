import calculate from '../logic/calculate';

describe('testing calculate.js function is working correctly', () => {
  it("test 'AC' button outputs 0", () => {
    // arrange
    let obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = 'AC';
    // act
    obj = calculate(obj, buttonName);
    const { total } = obj;
    // assert
    expect(total).toEqual(0);
  });

  it('test 5 multiply by 2 outputs 10', () => {
    // arrange
    let obj = {
      total: 5,
      next: 2,
      operation: 'x',
    };
    const buttonName = '=';
    // act
    obj = calculate(obj, buttonName);
    const { total } = obj;
    // assert
    expect(parseInt(total, 10)).toBe(10);
  });
});
