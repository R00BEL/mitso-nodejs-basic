import fs from 'fs';
import {getPath} from "../utils/getPath.js";
import {join} from "path";

const write = async () => {
    const {__dirname} = getPath(import.meta.url)
    const folderPath = join(__dirname, 'files');
    const filePath = join(folderPath, 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writeStream);
};

await write();
