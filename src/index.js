// Antes usabas import; ahora use require
const app = require("./app");  

const port = app.get("port") || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
