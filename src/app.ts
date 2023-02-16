import express from 'express';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send());

export default app;
