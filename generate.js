const fs = require('fs');

const writeFile = info => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/page.html', info, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'Page created!'
            });
        });
    });
}

module.exports = {writeFile};