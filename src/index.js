/* @flow */
import Writer from './writer';

let defaultWriter = new Writer();

let mustache = {
    name: 'mustache.js',
    version: '0.8.1',
    tags: ['{{', '}}'],
    clearCache: () => {
        return defaultWriter.clearCache();
    },
    parse: (template: string, tags: Array<string>) => {}
};

export default mustache;
