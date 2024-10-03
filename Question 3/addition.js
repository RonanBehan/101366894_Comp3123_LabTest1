const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function createLogFiles() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }

    process.chdir(logsDir);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFile(fileName, `This is log file number ${i}`, (err) => {
            if (err) {
                console.error(`Error writing file ${fileName}:`, err);
            } else {
                console.log(`Created file: ${fileName}`);
            }
        });
    }
}

createLogFiles();
