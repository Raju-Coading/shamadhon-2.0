// Simple Node.js API without external dependencies
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/hello' && req.method === 'GET') {
    const body = JSON.stringify({ message: 'Hello, World!' });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(body);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running. Try GET /api/hello');
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
