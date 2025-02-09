import fs from 'fs';
import path, {join} from 'path';
import {getPath} from "../utils/getPath.js";

const copy = async () => {
    const {__dirname} = getPath(import.meta.url);
    const sourceFolder = join(__dirname, 'files');
    const destinationFolder = join(__dirname, 'files_copy');

    if (!fs.existsSync(sourceFolder)) {
        console.error('FS operation failed');
        return;
    }

    if (fs.existsSync(destinationFolder)) {
        console.error('FS operation failed');
        return;
    }
    fs.mkdirSync(destinationFolder, { recursive: true });

    const items = fs.readdirSync(sourceFolder);
    items.forEach((item) => {
        const sourceItem = path.join(sourceFolder, item);
        const destinationItem = path.join(destinationFolder, item);

        fs.copyFileSync(sourceItem, destinationItem);
    });
};

await copy();
