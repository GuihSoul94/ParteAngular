const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8989',
  }
];
module.exports = proxy;