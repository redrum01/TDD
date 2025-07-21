export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    
    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;
    
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      const customDelimiter = numbers.substring(2, delimiterEnd);
      delimiter = new RegExp(`[,\n${customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }
    
    const nums = numbersToProcess.split(delimiter);
    const negatives = nums.filter(num => parseInt(num) < 0);
    
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed ${negatives.join(',')}`);
    }
    
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
}