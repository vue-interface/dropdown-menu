const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: {
        content: false,
        options: {
            whitelistPatterns: [/^bg-/]
        }
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        require('@vue-interface/variant/tailwindcss'),
        require('./tailwindcss')
    ]
};