//? Module
const app = require("./app");
require("dotenv").config();

//? Datas
const port = process.env.PORT;

//?Server
app.listen(port, () => console.log(`Server started, listening port: ${port}`));
