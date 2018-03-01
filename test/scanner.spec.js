import Scanner from 'src/scanner';

describe('Scanner Test', () => {
    let string = 'Hello, {{name}}';
    let re = /\{\{/i;
    let scanner;

    beforeEach(() => {
        scanner = new Scanner(string);
    });

    it('scan', () => {
        let res = scanner.scan(re);
        console.log(scanner.tail);
        expect(res).toBe('');
    });

    it('scanUntil', () => {
        let res = scanner.scanUntil(re);
        expect(res).toBe('Hello, ');
        expect(scanner.tail).toBe('{{name}}');
    });
});
