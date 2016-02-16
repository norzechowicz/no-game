'use strict';

export default class Message
{
    static expected(type, value)
    {
        return `Expected ${type} but got "${this.castToString(value)}".`
    }

    static expectedInstanceOf(instance, value)
    {
        return `Expected instance of \"${instance}\" but got "${this.castToString(value)}".`
    }

    static castToString(value)
    {
        if (typeof value === 'string') {
            return `string["${value}"]`;
        }

        if (typeof value === 'number') {
            if (Number.isInteger(value)) {
                return `int[${value}]`;
            }

            return `float[${value}]`;
        }

        if (typeof value === 'boolean') {
            return `boolean[${(value) ? "true" : "false"}]`;
        }

        if (typeof value === 'function') {
            return `function[${value.toString()}]`;
        }

        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                return `array[length: ${value.length}]`;
            }

            if (value instanceof Map) {
                return `Map[size: ${value.size}]`;
            }

            if (value instanceof WeakMap) {
                return `WeakMap[]`;
            }

            if (value instanceof Set) {
                return `Set[size: ${value.size}]`;
            }

            if (value instanceof WeakSet) {
                return `WeakSet[]`;
            }

            if (value instanceof String) {
                return `String["${value}"]`;
            }

            if (value instanceof Number) {
                let source = value.valueOf();

                if (Number.isInteger(source)) {
                    return `Number:int[${source}]`;
                }

                return `Number:float[${source}]`;
            }

            if (value instanceof Boolean) {
                return `Boolean[${(value.valueOf()) ? "true" : "false"}]`;
            }

            if (value instanceof Date) {
                return `Date["${value.toString()}"]`;
            }

            if (value instanceof RegExp) {
                return `RegExp[${value.toString()}]`;
            }

            return `object[${JSON.stringify(value)}]`;
        }

        if (typeof value === 'undefined') {
            return 'undefined';
        }

        throw `Unhandled type ${typeof value}`;
    }
}