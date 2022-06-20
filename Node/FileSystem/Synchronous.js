const fs = require("fs")


/**
 * readFileSync
 * @param path: <string>|<Buffer>|<URL>|<integetr>filename or file descriptor.
 * @param options: <Object>|<string>.
 *     @member encoding <string>|<null> Default: null;
 *     @member flag <string>.
 * @return <string>|<Buffer>.
 * Returns the contents of the path.
 * For detailed information, see the documentation of the asynchronous version of this API: fs.readFile().
 * If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.
 * Similar to fs.readFile(), when the path is a directory, the behavior of fs.readFileSync() is platform-specific.
 */

const RESULT_readFileSync = fs.readFileSync("Synchronous.js", {
    encoding: "utf8",
    flag: 'r'
})
console.log(RESULT_readFileSync)



