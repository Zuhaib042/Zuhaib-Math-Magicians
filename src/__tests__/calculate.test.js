import calculate from '../logic/calculate';

describe('testing calculate.js function is working correctly', () => {
  it("test 'AC' button outputs 0", () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = 'AC';
    obj = calculate(obj, buttonName);
    const { total } = obj;

    expect(total).toEqual(0);
  });

  it('test 5 multiply by 2 outputs 10', () => {
    let obj = {
      total: 5,
      next: 2,
      operation: 'x',
    };
    const buttonName = '=';
    obj = calculate(obj, buttonName);
    const { total } = obj;

    expect(parseInt(total)).toBe(10);
  });
});
