const PROJECT_PATH = "D:\\Project\\NodeWeb\\"
const fs = require("fs")

fs.readdir(PROJECT_PATH,
    {withFileTypes: true, encoding: "utf-8"},
    (err, files) => {
        if (err) console.log(err)
        files.forEach(file => {
                console.log(`Name: ${file.name}, IsDirectory: ${file.isDirectory()}`)
            }
        )
    }
)
