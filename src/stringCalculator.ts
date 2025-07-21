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
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
  }
}