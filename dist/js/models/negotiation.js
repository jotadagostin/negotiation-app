var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _day, _quantity, _amount;
export class Negotiation {
    constructor(date, quantity, amount) {
        _day.set(this, void 0);
        _quantity.set(this, void 0);
        _amount.set(this, void 0);
        __classPrivateFieldSet(this, _day, date);
        __classPrivateFieldSet(this, _quantity, quantity);
        __classPrivateFieldSet(this, _amount, amount);
    }
    get day() {
        return __classPrivateFieldGet(this, _day);
    }
    get quantity() {
        return __classPrivateFieldGet(this, _quantity);
    }
    get amount() {
        return __classPrivateFieldGet(this, _amount);
    }
    get volume() {
        return __classPrivateFieldGet(this, _quantity) * __classPrivateFieldGet(this, _amount);
    }
}
_day = new WeakMap(), _quantity = new WeakMap(), _amount = new WeakMap();
