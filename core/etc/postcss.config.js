const fs = require('fs');
const path = require('path');

function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);

    if (fs.existsSync(dirname)) {
        return;
    }

    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

function writeToFile(target, content) {
    ensureDirectoryExistence(target);

    fs.writeFileSync(
        target,
        JSON.stringify(content)
    );
}

module.exports = (ctx) => {
    const isProduction = (ctx.env === 'production');

    const configPostCssModules = {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        getJSON: (cssFileName, json) => {
            const targetPath = path.relative(__dirname, cssFileName);

            writeToFile(`./dist/styles/${targetPath}.json`, json);
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
            'postcss-import': { skipDuplicates: true },
            'postcss-modules': isProduction ? configPostCssModules : false,
            autoprefixer: isProduction ? configAutoprefixer : false,
            cssnano: isProduction ? configCssNano : false,
            'postcss-nesting': true,
        },
    };
};
