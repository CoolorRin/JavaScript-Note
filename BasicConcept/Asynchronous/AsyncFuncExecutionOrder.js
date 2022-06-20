function resolveAfter3Second() {
    console.log("Strating 3 second Resolve Function.")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolve msg from 3 second function.")
            console.log("3 second promise been called")
        }, 3000)
    })
}

function resolveAfter2Second() {
    console.log("Starting 2 second Reslove Function.")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolve msg from 2 second function.")
            console.log("2 second promise been called")
        }, 2000)
    })
}

async function sequentialStart() {
    console.log("==Sequential Start==")
    const __3Second = await resolveAfter3Second()
    console.log(__3Second)
    const __2Second = await resolveAfter2Second()
    console.log(__2Second)
    console.log("== Sequential End ==")
}

async function concurrentStart() {
    console.log("==Concurrent start with await==")
    const __3Second = resolveAfter3Second()
    const __2Second = resolveAfter2Second()
    console.log(await __3Second)
    console.log(await __2Second)
    console.log("==Concurrent End==")
}

function concurrentPromise() {
    console.log("==Concurrent Start with Promise.all==")
    return Promise.all([resolveAfter3Second(), resolveAfter2Second()])
        .then((messages)=> {
            console.log(messages[0])
            console.log(messages[1])
            console.log("==Concurrent Promise.all End==")
        })

}

async function parallel() {
    console.log("==Parallel with await Promise.all==")

    await Promise.all([
        (async () => console.log(await resolveAfter3Second()))(),
        (async () => console.log(await resolveAfter2Second()))()
    ])

    console.log("==Parallel with await Promise.all End==")
}

sequentialStart()
// concurrentStart()
// concurrentPromise()
// parallel()



// InterView Question
// async function async1() {
//     console.log("async1 start");
//     await  async2();
//     console.log("async1 end");
// }
// async  function async2() {
//     console.log( 'async2 start');
// }
// console.log("script start");

// setTimeout(function () {
//     console.log("settimeout");
// },0);
// async1();
// new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
// }).then(function () {
//     console.log("promise2");
// });
// console.log('script end');
