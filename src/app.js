// src/app.js
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;  // Web app on port 3000

// Serve static files
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Web app is running on http://localhost:${PORT}`);
});
