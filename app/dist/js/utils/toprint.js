export function toPrint(...objects) {
    for (let object of objects) {
        console.log(object.toText());
    }
}
