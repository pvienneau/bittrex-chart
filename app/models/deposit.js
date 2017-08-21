import mongoose from 'mongoose';

const Deposit = new mongoose.Schema({
    bittrex_id: {
        type: Number,
        unique: true,
    },
    currency: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        min: 0,
        required: true,
    },
    amount_cad: {
        type: Number,
        min: 0,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export default mongoose.model('Deposit', Deposit);
