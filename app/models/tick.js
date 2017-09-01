import mongoose from 'mongoose';
import moment from 'moment';

import { dollar } from 'utils/string';
import plugins from './plugins';

const Tick = new mongoose.Schema(
    {
        deposit_total: {
            type: Number,
            min: 0,
            set: v => dollar(v),
            get: v => dollar(v),
        },
        value: {
            type: Number,
            min: 0,
            set: v => dollar(v),
            get: v => dollar(v),
        },
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: false,
        },
    }
);

Tick.set('toJSON', {
    getters: true,
    virtuals: false,
});

Tick.set('toObject', {
    getters: true,
    virtuals: false,
});

Tick.plugin(plugins);

export default mongoose.model('Tick', Tick);
