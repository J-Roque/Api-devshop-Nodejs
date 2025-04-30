// src/index.js
const app = require('./app');  // Usamos require

const port = app.get('port') || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
