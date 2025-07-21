# String Calculator TDD Kata

A comprehensive Test-Driven Development implementation of the String Calculator kata using TypeScript and Jest.

## 🎯 Features Implemented

### Core Requirements
✅ Empty string returns 0  
✅ Single number returns itself  
✅ Two comma-separated numbers return sum  
✅ Unknown amount of numbers  
✅ Newlines between numbers (`"1\n2,3"` = 6)  
✅ Custom delimiters (`"//;\n1;2"` = 3)  
✅ Negative number validation (throws exception)  
✅ Multiple negatives in exception message  

### Advanced Features
✅ Numbers > 1000 ignored (`"2,1001"` = 2)  
✅ Multi-character delimiters (`"//[***]\n1***2***3"` = 6)  
✅ Multiple delimiters (`"//[*][%]\n1*2%3"` = 6)  
✅ Multiple multi-character delimiters  

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Running Tests
```bash
npm test
```

### Building the Project
```bash
npm run build
```

## 📁 Project Structure

- `src/stringCalculator.ts`: Main implementation
- `test.ts`: Comprehensive test suite
- `dist/`: Compiled JavaScript output

## 🔄 TDD Process

This project demonstrates strict Test-Driven Development:
1. 🔴 **Red**: Write a failing test
2. 🟢 **Green**: Write minimal code to pass
3. 🔵 **Refactor**: Clean up while keeping tests green

**18 commits** show the complete TDD journey from basic functionality to advanced features.

## 📊 Test Coverage

12 comprehensive test cases covering:
- Basic arithmetic operations
- Edge cases (empty strings, single numbers)
- Complex delimiter patterns
- Error handling (negative numbers)
- Advanced parsing (multi-character, multiple delimiters)

## 🏗️ Implementation Highlights

- **Regex-based parsing** for flexible delimiter handling
- **Robust error handling** with descriptive messages
- **Clean, readable code** following TypeScript best practices
- **Incremental complexity** showing TDD discipline