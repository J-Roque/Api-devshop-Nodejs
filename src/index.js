import app from "./app.js"; // ← Añade .js aquí

const main = () => {
  app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
};

main();
