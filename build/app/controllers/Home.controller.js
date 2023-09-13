"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homePage = (req, res, next) => {
    console.log(req, next);
    next();
    res.send('Hello world!');
};
module.exports = homePage;
