// var fs= require('promise-fs');

// function onDone(song){
//     console.log(song)
// }

// function onError(err){
//     console.log(err)
// }

// function readFile(path){
//     return fs.readFile(path,{encoding:'utf8'})
// }
// readFile('song1.txt')
//     .then(onDone)
//     .then(()=>readFile('song2.txt'))
//     .then(onDone)
//     .catch(onError);

var fs = require('fs')

function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:'utf8'},function(err,data){
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}
// readFilePromise('song1.txt')
//     .then(function(song1){
//         console.log(song1)
//         return readFilePromise('song2.txt')
//     })
//     .then(function(song2){
//         console.log(song2)
//         return readFilePromise('song3.txt')
//     })
//     .then(function(song3){
//         console.log(song3)
//     })
//     .catch(function(err){
//         console.log(err)
//     })

    Promise.all([
        readFilePromise('song1.txt'),
        readFilePromise('song2.txt'),
        readFilePromise('song3.txt')
    ])
    .then(function(value){
        console.log(value) //tra ve 1 mang cac gia tri
    })
    .catch(function(err){
        console.log(err)
    })

