import { Printing } from "./printing.js";

export function toPrint(...objects: Printing[]) {
  for (let object of objects) {
    console.log(object.toText());
  }
}
