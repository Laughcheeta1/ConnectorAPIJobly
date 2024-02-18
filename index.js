const app = require('express')();
const PORT = 8080;

app.listen (
    PORT,
    () => console.log(`Conector API initialized in port http://localhost:${PORT}`)
)