import * as statics from './statics';

export default function(schema, options) {
    Object.keys(statics).forEach(key => {
        schema.statics[key] = statics[key];
    });

    schema.set('toJSON', { getter: true, virtuals: true });
    schema.set('toObject', { getter: true, virtuals: true });
}
