const fs = require('fs');
const path = require('path');

//copy the file to dir
let copyFile = (req, res, next) => {
    //gets file name and adds it to dir
    let filename = path.basename(req.body.file);
    let data = fs.createReadStream(req.body.file);
    let dest = fs.createWriteStream(path.resolve(req.body.dir, filename));

    data.pipe(dest);
    data.on('end', function () { console.log('Succesfully copied'); });
    data.on('error', function (err) { console.log(err); });
};

//example, copy file1.htm from 'test/dir_1/' to 'test/'
module.exports = {
    copyFile,
}