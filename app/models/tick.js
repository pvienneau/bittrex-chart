import mongoose from 'mongoose';

const Tick = new mongoose.Schema({
    deposit_total: {
        type: Number,
        min: 0,
    },
    value: {
        type: Number,
        min: 0,
    },
    created_at: {
        type: Date,
        required: true,
    },
});

export default mongoose.model('Tick', Tick);
