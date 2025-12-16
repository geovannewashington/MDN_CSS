// -- constants
const PORT = 5000;

// -- imports
import express from 'express';
import { dirname } from 'node:path';
import path from 'node:path';
import cors from 'cors';
// import { fileURLToPath } from 'node:url';
// import fs from 'node:fs/promises';
import jsonstyle from './styles.json';

// __filename = fileURLToPath(import.meta.url);
// __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    const jsonPath = path.join(__dirname, 'styles.json');
    return res.status(200).json(jsonstyle);
});

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) });
