const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8989',
  },
  {
    context: '/',
    target: 'http://localhost:8989'
  },
  {
  context: '/image',
  target:'http://localhost:8989'
  }
];
module.exports = proxy;
