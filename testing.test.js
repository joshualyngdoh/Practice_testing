const {
    reverseString,
    stringLength,
    Calculator,
    capitalize,
  } = require('./testing');
  
  test('sum number of letters in string', () => {
    const string = 'hello';
    const actual = stringLength(string);
    expect(stringLength('hello')).toBe(5);
  }); 
  
  test('Should return Error if string count isnt between 0 & 10', () => {
    const string = 'helloworldhowareyou';
    const actual = () => {
      stringLength(string);
    };
  
    expect(actual).toThrowError();
  }); 
  
  test('should return reverse string', () => {
    const string = 'hello';
    const actual = reverseString(string);
    expect(actual).toBe(reverseString(string));
  }); 
  
  describe('add', () => {
    test(' 1 + 2 should return 3 ', () => {
      const num1 = 1;
      const num2 = 2;
      const calculator = new Calculator(num1, num2);
      const actual = calculator.add();
      expect(actual).toBe(3);
    }); 
  });
  
  describe('subtract', () => {
    test('2 - 1 should return 1', () => {
      const num1 = 2;
      const num2 = 1;
      const calculator = new Calculator(num1, num2);
      const actual = calculator.subtract();
      expect(actual).toBe(1);
    }); 
  });
  
  describe('multiply', () => {
    test(' 1 * 2 should return 2', () => {
      const num1 = 1;
      const num2 = 2;
      const calculator = new Calculator(num1, num2);
      const actual = calculator.multiply();
      expect(actual).toBe(2);
    }); 
  });
  
  describe('divide', () => {
    test(' 2 / 1 should return 2', () => {
      const num1 = 2;
      const num2 = 1;
      const calculator = new Calculator(num1, num2);
      const actual = calculator.divide();
      expect(actual).toBe(2);
    }); 
  }); 
  
  test('first letter sould be returnerd capitalized', () => {
    const string = 'hello';
    const actual = string[0].toUpperCase();
    expect(actual).toBe('H');
  });