export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    
    const nums = numbers.split(',');
    if (nums.length > 2) {
      throw new Error('Can only handle up to 2 numbers');
    }
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
}