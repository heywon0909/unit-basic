const Stack = require('../stack/Stack.js');

describe('Stack test', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
        stack.push(1);
     
    })
    
    it('pop test', () => {
        stack.pop();
        expect(stack.arr).toBeUndefined();
    });
    it('push test', () => {
        stack.push(2);
        expect(stack.arr).toEqual({ value: 1, child: { value: 2, child: null } });
    });
    it('push test multiple', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.arr).toEqual({value:1,child:{value:2,child:null}})
    })
});