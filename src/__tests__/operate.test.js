import operate from '../logic/operate';

describe('testing operate.js function', () => {
  it("test if 5 plus 5 is '10' ", () => {
    // arrange
    const num1 = 5;
    const num2 = 5;
    const operation = '+';

    // act
    const sum = operate(num1, num2, operation);

    // assert
    expect(sum).toEqual('10');
  });

  it("test if 5 multiply 5 is '25' ", () => {
    // arrange
    const num1 = 5;
    const num2 = 5;
    const operation = 'x';

    // act
    const sum = operate(num1, num2, operation);

    // assert
    expect(sum).toEqual('25');
  });
});
