const fs = require('fs');
const path = require('path');
const fs_extra = require('fs-extra');
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

let copyFile_ChangeNameToParentDir = (req, res, next) => {
    let filename =  path.basename(path.dirname(req.body.file))
    let data = fs.createReadStream(req.body.file);
    let dest = fs.createWriteStream(path.resolve(req.body.dir, filename));

    data.pipe(dest);
    data.on('end', function () { console.log('Succesfully copied'); });
    data.on('error', function (err) { console.log(err); });
}

let copyFolder = (req, res, next) => {
    fs_extra.copy(req.body.folder, req.body.dest, err => {
        if (err) return console.error(err)
        console.log('Successfully copied Folder!')
      })
}

let copyFolder_ChangeNameToParentDir = (req, res, next) => {
    let filename =  path.basename(path.dirname(req.body.folder))
    fs_extra.copy(req.body.folder, path.join(req.body.dest, filename), err => {
        if (err) return console.error(err)
        console.log('Successfully copied Folder!')
    })
}

module.exports = {
    copyFile,
    copyFile_ChangeNameToParentDir,
    copyFolder,
    copyFolder_ChangeNameToParentDir,
}