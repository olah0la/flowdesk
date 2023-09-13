import { Application } from "express";

const app: Application = require("./app");
const port: number = Number(process.env.PORT) || 3000;
app.listen(port, (): void => {
    console.log('SERVER IS UP ON PORT:', port);
})
