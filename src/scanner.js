export default class Scanner {
    string: string;
    tail: string;
    pos: number;

    constructor(string: string) {
        this.string = string;
        this.tail = string;
        this.pos = 0;
    }

    eos(): boolean {
        return this.tail === '';
    }

    scan(re: RegExp): string {
        let match = this.tail.match(re);

        if (match && match.index === 0) {
            let string = match[0];
            this.tail = this.tail.substring(string.length);
            this.pos += string.length;

            return string;
        }

        return '';
    }

    scanUntil(re: RegExp): string {
        let index = this.tail.search(re),
            match;

        switch (index) {
            case -1:
                match = this.tail;
                this.tail = '';
                break;
            case 0:
                match = '';
                break;
            default:
                match = this.tail.substring(0, index);
                this.tail = this.tail.substring(index)
        }

        this.pos += match.length;

        return match;
    }
}