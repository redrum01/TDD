import { StringCalculator } from './src/stringCalculator';

// Simple test runner
function test(description: string, testFn: () => void) {
  try {
    testFn();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.log(`❌ ${description}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

function expect(actual: any) {
  return {
    toBe: (expected: any) => {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, but got ${actual}`);
      }
    }
  };
}

// Tests
const calculator = new StringCalculator();

test('should return 0 for empty string', () => {
  expect(calculator.add('')).toBe(0);
});

test('should return the number itself for single number', () => {
  expect(calculator.add('1')).toBe(1);
});

test('should return sum of two comma-separated numbers', () => {
  expect(calculator.add('1,5')).toBe(6);
});

test('should handle unknown amount of numbers', () => {
  expect(calculator.add('1,2,3,4,5')).toBe(15);
});

test('should handle newlines between numbers', () => {
  expect(calculator.add('1\n2,3')).toBe(6);
});

test('should support custom delimiters', () => {
  expect(calculator.add('//;\n1;2')).toBe(3);
});

test('should throw exception for negative numbers', () => {
  try {
    calculator.add('-1,2');
    throw new Error('Expected exception was not thrown');
  } catch (error) {
    expect(error instanceof Error ? error.message : '').toBe('negatives not allowed -1');
  }
});

test('should show all negative numbers in exception', () => {
  try {
    calculator.add('-1,2,-3');
    throw new Error('Expected exception was not thrown');
  } catch (error) {
    expect(error instanceof Error ? error.message : '').toBe('negatives not allowed -1,-3');
  }
});