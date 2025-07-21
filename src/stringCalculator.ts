export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    
    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;
    
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      const delimiterSection = numbers.substring(2, delimiterEnd);
      
      if (delimiterSection.startsWith('[') && delimiterSection.endsWith(']')) {
        const customDelimiter = delimiterSection.slice(1, -1);
        delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      } else {
        delimiter = new RegExp(`[,\n${delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
      }
      
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }
    
    const nums = numbersToProcess.split(delimiter);
    const negatives = nums.filter(num => parseInt(num) < 0);
    
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed ${negatives.join(',')}`);
    }
    
    return nums.reduce((sum, num) => {
      const number = parseInt(num);
      return number > 1000 ? sum : sum + number;
    }, 0);
  }
}