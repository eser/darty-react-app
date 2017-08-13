const fs = require('fs');
const path = require('path');

module.exports = (ctx) => {
    const isProduction = (ctx.env === 'production');

    const configPostCssModules = {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        getJSON: (cssFileName, json) => {
            const cssName = path.basename(cssFileName, '.css');
            const jsonFileName = path.resolve(`./dist/styles/${cssName}.json`);

            fs.writeFileSync(jsonFileName, JSON.stringify(json));
        },
    };

    const configAutoprefixer = {
        browsers: [ 'last 2 versions', '> 5%' ],
    };

    const configCssNano = {
        preset: [
            'default',
            {
                discardComments: { removeAll: true },
            },
        ],
    };

    return {
        plugins: {
            'postcss-modules': isProduction ? configPostCssModules : false,
            autoprefixer: isProduction ? configAutoprefixer : false,
            cssnano: isProduction ? configCssNano : false,
        },
    };
};
