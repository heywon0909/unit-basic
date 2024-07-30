class Stack {
    arr
    constructor() {
    }
    pop() {
        let pop_value = this.arr.value;
        this.arr = this.arr.key;
        return pop_value;
    }
    push(val) {
        if (!this.arr) {
            this.arr = { value: val, child: null };
        } else {
            this.arr.child = { value: val, child: null };
        }
    }
}
module.exports = Stack;