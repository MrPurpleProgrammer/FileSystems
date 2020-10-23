const fs = require('fs');
const path = require('path');

//moves the file to dir
let moveFile = (req, res, next) => {
    console.log(req.body);
    //gets file name and adds it to dir2
    let f = path.basename(req.body.file);
    let dest = path.resolve(req.body.dir, f);

    fs.rename(req.body.file, dest, (err) => {
        if (err) res.send(err);
        else {
            console.log('Successfully moved');
            res.send('Successfully moved ' + req.body.file + ' to ' + req.body.dir);
        }
    });
};

//move file1.htm from 'test/' to 'test/dir_1/'
module.exports = {
    moveFile,
}

