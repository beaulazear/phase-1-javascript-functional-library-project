function sanitizeData(collection) {
    if (Array.isArray(collection)) {
    return collection.slice();
    }
    return Object.values(collection)
}

function myEach(collection, callback) {

    let newCollection = sanitizeData(collection)

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    // newCollection.forEach(element => callback(element))

    return collection;
}

function myMap(collection, callback) {

    let newCollection = sanitizeData(collection)

    let newArr = [];

    for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]))
    }
    // let mapped = newCollection.map(callback)

    return newArr

}

[1,2,3].reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0)

// 0
// ([1,2,3], addAll) => 6
function myReduce(collection, callback, initial) {

    let newCollection = sanitizeData(collection)

   // const callback = (acc, val, collection) => (acc + (val * 3))

    let acc;
    for (let i = 0; i < newCollection.length; i++) {
        initial = callback(initial, newCollection[i], newCollection)
    }

    return initial;

}