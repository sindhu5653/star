function lightstove() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Lighted stove successfully');
        }, 300);
    })
}
function boiledwater() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Boiled water successfully');
        }, 1000);
    });
}
function makecoffe() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Putted coffee and sugar');
        }, 2000);
    });
}
function served() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('served coffe successfully');
            resolve()
        }, 3000);
    });
}

lightstove()
    .then((result) => {
        console.log(result);
        boiledwater()
            .then((result) => {
                console.log(result);
                makecoffe()
                    .then((result) => {
                        console.log(result);
                    })
            })
    })