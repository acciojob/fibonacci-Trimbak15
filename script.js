function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num-1) + fibonacci(num-2);
}
alert(fibonacci(num));

module.exports = fibonacci;
