function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved: Success after 500ms");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected: Error after 500ms");
        }, 500);
    });
}

resolvedPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

rejectedPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
