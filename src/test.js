function concatenateStrings(value1, value2) {
  if (value1 === '' && value2 === '') {
    return '';
  }
  if (value1 === '') {
    return value2;
  }
  return value1 + value2;
}

module.exports = concatenateStrings;

console.log(concatenateStrings('aa', 'bb')); // aabb
console.log(concatenateStrings('Hello, ', 'World!')); // Hello, World!
console.log(concatenateStrings('123', '456')); // 123456
console.log(concatenateStrings('', 'bb')); // bb
console.log(concatenateStrings('', '123')); // 123
console.log(concatenateStrings('aa', '')); // aa
console.log(concatenateStrings('Hello, ', '')); // Hello,
console.log(concatenateStrings('', '')); // ''
