function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input is not an array");
        }

        const filteredWords = arr
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());

        resolve(filteredWords);
    });
}

const mixedArray = ["HELLO", 42, "WORLD", null, "JavaScript", true];

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
