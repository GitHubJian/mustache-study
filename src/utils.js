/* @flow */

import mustache from './index';

let whiteRe = /\s*/,
    spaceRe = /\s+/,
    nonSpaceRe = /\S/,
    eqRe = /\s*=/,
    curlyRe = /\s*\}/,
    tagRe = /#|\^|\/|>|\{|&|=|!/;

let RegExp_test = RegExp.prototype.test;

function testRegExp(re: RegExp, string: string) {
    return RegExp_test.call(re, string);
}

export const isFunction = (object: any) => {
    return typeof object === 'function';
};

export const parseTemplate = (
    template: string = '',
    tags: Array<string> = mustache.tags
) => {
    if (typeof tags === 'string') {
        tags = tags.split(spaceRe);
    }
};
