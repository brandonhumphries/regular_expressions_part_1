let isAStockSymbol = (stockSymbol) => {
    return /^[A-Z]?[A-Z]?[A-Z]?[A-Z]?[A-Z]?$/.test(stockSymbol);
};

console.assert(isAStockSymbol('AAPL') === true, 'AAPL is a Stock Ticker');
console.assert(isAStockSymbol('GOOG') === true, 'GOOG is a Stock Ticker');
console.assert(isAStockSymbol('MDB') === true, 'MDB is a Stock Ticker');
console.assert(isAStockSymbol(123) === false, '123 is not a Stock Ticker');
console.assert(isAStockSymbol('ABCDEFG') === false, 'ABCDEFG is not a Stock Ticker');
console.assert(isAStockSymbol('A123') === false, 'A123 is not a Stock Ticker');
console.assert(isAStockSymbol('123') === false, '123 is not a Stock Ticker');
console.assert(isAStockSymbol('ABCDE') === true, 'ABCDE is a Stock Ticker');
console.assert(isAStockSymbol('F') === true, 'F is a Stock Ticker');
console.assert(isAStockSymbol('AA$L') === false, 'AA$L is not a Stock Ticker');


let isACreditCardNumber = (creditCardNumber) => {
    return //.test(creditCardNumber);
};

console.assert(isACreditCardNumber(4000123498762746) === true, '4000123498762746 is a credit card number');
console.assert(isACreditCardNumber('4000-1234-9876-2746') === true, '4000-1234-9876-2746 is a credit card number');
console.assert(isACreditCardNumber(1) === false, '1 is not a valid credit card number');
console.assert(isACreditCardNumber('ABCD') === false, 'ABCD is not a valid credit card number');

