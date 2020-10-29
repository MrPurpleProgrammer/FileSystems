
const { moveFile } = require('./utils/move');
const { copyFile, copyFile_ChangeNameToParentDir } = require('./utils/copy');
const { renameFile } = require('./utils/rename')
const express = require('express');
const bodyParser = require('body-parser')

const server = express();
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'content-type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
server.use(bodyParser.json({ limit: '10000kb' }));
server.listen(5001, () => console.log(`Server started on port ${5001}`));

server.use('/move', (req, res, next) => { moveFile(req, res, next) });
server.use('/copy', (req, res, next) => { copyFile(req, res, next) });
server.use('/copy/change_to_parent_dir', (req, res, next) => { copyFile_ChangeNameToParentDir(req, res, next) });
server.use('/rename', (req, res, next) => { renameFile(req, res, next) });
