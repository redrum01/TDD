export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    
    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;
    let multiplymode = false;
    
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      const delimiterSection = numbers.substring(2, delimiterEnd);
      
      if (delimiterSection.includes('[')) {
        const delimiters = delimiterSection.match(/\[([^\]]+)\]/g)?.map(d => d.slice(1, -1)) || [];
        if(delimiters[0]==='*' && delimiters.length === 1){
          multiplymode = true;
        }
        const escapedDelimiters = delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        delimiter = new RegExp(escapedDelimiters.join('|'), 'g');
      } else {
        if(delimiterSection ==='*'){
          multiplymode = true;
        }
        delimiter = new RegExp(`[,\n${delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
      }
      
      numbersToProcess = numbers.substring(delimiterEnd + 1);
    }

    
    const nums = numbersToProcess.split(delimiter);
    const negatives = nums.filter(num => parseInt(num) < 0);
    
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed ${negatives.join(',')}`);
    }

    if (multiplymode) {
      return nums.reduce((prod, num) => {
        const n = parseInt(num, 10);
        if(Number.isNaN(n) || n > 1000) return prod;
        return prod * n;
      }, 1);
    }
    
    return nums.reduce((sum, num) => {
      const number = parseInt(num);
      return number > 1000 ? sum : sum + number;
    }, 0);
  }
}