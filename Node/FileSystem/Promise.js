const fsPromise = require("fs/promises")
const ROOT_PATH = "D:\\Project\\NodeWeb\\"

// ReadDir
function readDirectory(PATH) {
	console.log("Function Start.")
	fsPromise.readdir(ROOT_PATH, {
		withFileTypes: true,
		encoding: "utf-8",
	}).then(files => {
		files.forEach(file => {
			console.log(`Name: ${file.name}`)
		})
	})
	console.log("Function Over.")	// Show next to the Function start.
}

async function readDirectoryWithAwait(PATH) {
	console.log("Function Start.")
	const files = await fsPromise.readdir(ROOT_PATH, {
		withFileTypes: true,
		encoding: "utf-8",
	})

	files.forEach(file => {
		console.log(`Name: ${file.name}`)
	})
	console.log("Function Over.")	// Show the end of the fileName's LOG.
}


function EncapFunc(PATH, loopFlag) {
	return fsPromise.readdir(ROOT_PATH, {
		withFileTypes: true,
		encoding: "utf-8",
	}).then(files => {
		console.log("Resolve Result outer")
		let container = []
		const file = files[0]
		let outerData = {
			Name: file.name,
			testName: undefined
		}
		if (loopFlag) {
			EncapFunc(PATH, false).then(data => {
				console.log("Resolve Result inside")
				outerData.testName = data
				console.log(outerData)
			})
		}
		container.push({
			outerData
		})
		console.log(container)
		return container
	})
}

// Run
let test = undefined
EncapFunc(ROOT_PATH, true).then((data) => {
	test = data
	// console.log(test)
})

setTimeout(() => {
	console.log(test)
	setTimeout(() => {
		console.log(test)
	})
})

