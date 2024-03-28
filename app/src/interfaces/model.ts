import { Printing } from "../utils/printing.js";
import { toCompare } from "./toCompare.js";

export interface Model<T> extends Printing, toCompare<T> {}
