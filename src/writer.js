export default class Writer {
    cache: Object;

    constructor() {
        this.cache = {};
    }

    parse(template: string, tags: Array<string>) {
        let cache = this.cache,
            tokens = cache[template];

        if (tokens == null) {
            tokens = cache[template] = parseTemplate(template, tags);
        }

        return tokens;
    }
}
