// Clutter Clearance - Node.js Directory Organizer
// This script organizes files in a directory into folders based on file extensions

// 1. name.jpg
// 2  name.png
// 3  this.pdf
// 4  ritik.zip
// 5  Rohan.zip
// 6  catch.jpg
// 7  ritik.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf ,pdf/ritik.pdf
// zip/harry.zip, zip/Rohan.zip


import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "D:\\Desktop\\sigma web devlopment course\\VIDEO 91"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log('running for', item);

    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if it is not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }


}
