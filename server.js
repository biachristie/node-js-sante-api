const dotenv = require('dotenv').config( { path:'./env/.env' } );
const app = require("./src/app/app");

const PORT = process.env.PORT || 6666;

app.listen(PORT, () => console.log(`Aplicação está online na porta ${PORT}`));