const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            remove: false,
            add: true,
            flexbox: true,
            grid: false,
        }),
    ],
};
