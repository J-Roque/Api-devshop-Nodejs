// src/index.js
const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
