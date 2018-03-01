/* @flow */
import { isFunction } from './utils';

export default class Context {
    view: Object;
    cache: Object;
    parent: Object;

    constructor(view: Object = {}, parentContext: Object) {
        this.view = view;
        this.cache = { '.': this.view };
        this.parent = parentContext;
    }

    push(view: Object): Context {
        return new Context(view, this);
    }

    lookup(name: string): any {
        let value;

        if (name in this.cache) {
            value = this.cache[name];
        } else {
            let context = this;

            while (context) {
                if (name.indexOf('.') > 0) {
                    value = context.view;

                    let names = name.split('.'),
                        i = 0;

                    while (value != null && i < names.length) {
                        value = value[names[i++]];
                    }
                } else {
                    value = context.view[name];
                }

                if (value != null) break;

                context = context.parent;
            }

            this.cache[name] = value;
        }

        if (isFunction(value)) {
            value = value.call(this.view);
        }

        return value;
    }
}
