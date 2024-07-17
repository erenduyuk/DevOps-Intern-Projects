const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Log dosyasının yolu
const logFile = path.join(__dirname, 'logs', 'log.txt');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Ana dizin için istek
app.get('/', (req, res) => {
    res.render('index');
});

// Log yazma işlemi
app.post('/log', (req, res) => {
    const now = new Date();
    const logMessage = `${now.toISOString()} - Button was clicked from backend2!\n`;

    // Log dizini yoksa oluştur
    fs.mkdir(path.dirname(logFile), { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating log directory', err);
            return res.sendStatus(500);
        }

        // Log dosyasına yaz
        fs.appendFile(logFile, logMessage, (err) => {
            if (err) {
                console.error('Error writing to log file', err);
                res.sendStatus(500);
            } else {
                console.log('Log written to file');
                res.sendStatus(200);
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
