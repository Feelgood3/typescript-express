import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// const express = require('express');
// const dotenv = require('dotenv');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server Challenge asdf');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
