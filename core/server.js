/* eslint-env node */
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const pwd = process.cwd();

const serverRenderer = (req, res, next) => {
    const serverObjects = require(`${pwd}/dist/server`);

    const filePath = path.join(pwd, 'dist/index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            next();

            return;
        }

        // render the app as a string
        const html = serverObjects.ssrRenderer(serverObjects.appStack, req.originalUrl);

        // inject the rendered app into our html and send it
        res.send(
            htmlData.replace(
                '<app></app>',
                `<app>${html}</app>`,
            ),
        );
    });
};

if (!('window' in global)) {
    global.window = {};
}

app.all('/', serverRenderer);

app.use(
    express.static(
        path.join(pwd, 'dist'),
        // {
        //     index: 'index.html',
        // },
    ),
);

app.listen(port, (err) => {
    if (err) {
        console.error(err);

        return;
    }

    console.log(`🌎 Server is now running at http://${hostname}:${port}.`);
});
