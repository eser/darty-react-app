import React from 'react';

import * as bulmaStyles from 'bulma';

function Home() {
    return (
        <>
            <h1 className={bulmaStyles.title}>Home</h1>

            ...and there is a dummy content
        </>
    );
}

export {
    Home as default,
};
