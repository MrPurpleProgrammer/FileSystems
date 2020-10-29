const fs = require('fs');
const path = require('path');

let renameFile = (req, res, next) => {
    fs.rename(req.body.oldPath, req.body.newPath, function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
}

module.exports = {
    renameFile
}