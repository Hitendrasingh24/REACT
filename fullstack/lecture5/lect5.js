const fs = require('fs');
const ar = {'Name': 'golmal', 'rating': '9'};

fs.writeFile(
    'movikk.txt',
    ar,
    {
        encoding: 'utf-8',
        flag: 'w'
    },
    (err) => {
        if (!err) {
            console.log("success");
        } else {
            console.log("failed");
        }
    }
);
