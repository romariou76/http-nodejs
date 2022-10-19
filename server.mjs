import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hola Mundo Romario');
  res.end();
}).listen(process.env.PORT);
