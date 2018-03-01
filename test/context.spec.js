import Context from 'src/context';

describe('Context Unit', () => {
    let context;
    let obj = {
        name: {
            first: 'xiao',
            last: 'wensheng'
        }
    }

    it('Context', () => {
        let ctx = new Context(obj);
        let a = ctx.lookup('name.first');
        expect(a).toBe('xiao');
    })
})