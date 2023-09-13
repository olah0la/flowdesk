import  { Request, Response } from 'express';

const homePage = (req: Request, res: Response, next: any): void => {
    next();
    res.send('Hello world!');
};

module.exports = homePage;
