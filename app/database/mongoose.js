import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connection.on(
    'error',
    console.error.bind(console, 'Connection error:')
);

mongoose.connection.once(
    'open',
    console.success.bind(console, 'Connected to mongo.')
);

mongoose.init = function() {
    return mongoose.connect(
        `mongodb://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PASSWORD}@${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
        {
            useMongoClient: true,
        }
    );
};
mongoose.init = mongoose.init.bind(mongoose);

export default mongoose;
