"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("./app");
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log('SERVER IS UP ON PORT:', port);
});
